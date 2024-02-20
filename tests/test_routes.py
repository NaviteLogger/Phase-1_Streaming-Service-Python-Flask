import pytest
from app import create_app, db
from app.movies.models import Movie
from app.users.models import User
from werkzeug.security import generate_password_hash
from sqlalchemy.orm import sessionmaker, scoped_session


# The base function for the test client is defined here. This function is used to create a test client for the Flask
# application. The test client is used to send requests to the application without running a server.
@pytest.fixture(scope="function")
def test_client():
    """
    This line initializes the Flask application by calling the create_app function without passing a specific test
    configuration. The create_app function automatically configures the app for testing based on environment variable.
    """
    app = create_app()

    with app.app_context():
        """
        These lines start a new database transaction. By creating a scoped session that is bound to this transaction,
        any database operations performed during the test will happen within this transaction
        """
        connection = db.engine.connect()
        transaction = connection.begin()

        # Configure the session to use the connection
        session_factory = sessionmaker(bind=connection)
        Session = scoped_session(session_factory)
        db.session = Session

        """
        This opens a context that provides a test client. This client can be used to send requests
        to the Flask application without running a server.
        """
        with app.test_client() as testing_client:
            yield testing_client

        # Roll back the transaction (undoing all database operations) and close the connection
        Session.remove()
        # transaction.rollback()
        connection.close()


@pytest.fixture(scope="function")
def prepare_movie_data():
    # Setup movie data before each test
    movie = Movie(title="Edge of Tomorrow", year=2014, director="Doug Liman", genre="Action")
    db.session.add(movie)
    db.session.commit()
    yield movie
    db.session.delete(movie)
    db.session.rollback()


"""
This fixture prepares a user before each test. It creates a new user with the username "testuser", email "testemail",
and password "testpassword". The user is then added to the database and committed. After each individual test, the user 
is deleted from the database and the session is rolled back to its initial state, so that the content / prerequisites of 
the previous test do not interfere with the upcoming tests. This is important because the session is shared between tests,
and we want to ensure that 'prepare_user_data' is executed before each test that requires it.
"""


@pytest.fixture(scope="function")
def prepare_user_data():
    # Assuming the User model has a method to set password
    user = User(username="testuser", email="testemail")
    user.set_password("testpassword")
    db.session.add(user)
    db.session.commit()
    # Yield is like a return statement, but it allows the function to continue executing after the yield statement
    # This is useful for cleanup operations that need to be executed after the test
    yield user
    db.session.delete(user)
    db.session.rollback()


def test_example_route(test_client):
    response = test_client.get("/")
    assert "Hello, world!" in response.data.decode("utf-8")


@pytest.mark.parametrize(
    # Define the parameters for the test. Those parameters will be used to assert the expected results
    "title, year, director, genre, status_code, movie_exists",
    [
        ("Edge of Tomorrow", 2014, "Doug Liman", "Action", 200, True),
        ("", 0, "", "", 200, False),
    ],
)
def test_search_for_movie(test_client, prepare_movie_data, title, year, director, genre, status_code, movie_exists):
    if not movie_exists:
        prepare_movie_data
    # Send a POST request to the test client
    response = test_client.post("/search-for-movie?query=Edge%20of%20Tomorrow")
    assert response.status_code == status_code

    json_data = response.get_json()
    assert json_data[0].get("title") == title
    assert json_data[0].get("year") == year
    assert json_data[0].get("director") == director
    assert json_data[0].get("genre") == genre


@pytest.mark.parametrize(
    "setup_required, username, email, password, expected_status, expected_message, status_code",
    [
        # Assumes no user exists beforehand
        (False, "newuser1", "newemail1@test.com", "newpassword", "success", "User created successfully", 201),
        # Assumes a user "testuser" already exists
        (True, "testuser", "testemail@example.com", "testpassword", "error", "User already exists", 400),
    ],
)
def test_register_route(test_client, prepare_user_data, setup_required, username, email, password, expected_status, expected_message, status_code):
    if setup_required:
        prepare_user_data  # Ensure this user setup is executed for tests that need it
    response = test_client.post("/register", json={"username": username, "email": email, "password": password})
    assert response.status_code == status_code
    assert response.get_json() == {"status": expected_status, "message": expected_message}


@pytest.mark.parametrize(
    "username, password, expected_status, expected_message, status_code, user_exists",
    [
        # Test case where user exists and password is correct
        ("testuser", "testpassword", "success", "Login successful", 200, True),
        # Test case where user exists but password is wrong
        ("testuser", "wrongpassword", "error", "Invalid password for the given user", 401, True),
        # Test case for a non-existent user
        ("non-existentuser", "non-existentpassword", "error", "User not found", 404, False),
    ],
)
def test_login_route(test_client, prepare_user_data, username, password, expected_status, expected_message, status_code, user_exists):
    if user_exists:
        # Ensure the user is prepared for tests that require an existing user.
        prepare_user_data

    # Perform the login attempt
    response = test_client.post("/login", json={"username": username, "password": password})
    assert response.status_code == status_code

    json_data = response.get_json()
    assert json_data.get("status") == expected_status
    assert json_data.get("message") == expected_message

    # For successful login, additionally check for the presence of the token
    if status_code == 200:
        assert "token" in json_data
