import pytest
from app import create_app, db
from app.movies.models import Movie
from app.users.models import User
from werkzeug.security import generate_password_hash
from sqlalchemy.orm import sessionmaker, scoped_session


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
        transaction.rollback()
        connection.close()


@pytest.fixture(scope="function")
def prepare_movie_data():
    # Setup movie data before each test
    db.session.add(Movie(title="Edge of Tomorrow", year=2014, director="Doug Liman", genre="Action"))
    db.session.commit()
    yield
    db.session.rollback()


@pytest.fixture(scope="function")
def prepare_user_data():
    # Assuming your User model has a method to set password
    user = User(username="testuser", email="testemail")
    user.set_password("testpassword")
    db.session.add(user)
    db.session.commit()
    yield
    db.session.rollback()


def test_example_route(test_client):
    response = test_client.get("/")
    assert "Hello, world!" in response.data.decode("utf-8")


def test_search_for_movie(test_client, prepare_movie_data):
    response = test_client.post("/search-for-movie?query=Edge%20of%20Tomorrow")
    assert response.status_code == 200
    movie = Movie.query.filter_by(title="Edge of Tomorrow").first()
    expected_response = [{"id": movie.id, "title": "Edge of Tomorrow", "year": 2014, "director": "Doug Liman"}]  # Dynamically get the ID
    assert response.get_json() == expected_response


# For user-related tests, we ensure the user data is prepared beforehand
@pytest.mark.parametrize(
    "username, email, password, expected_response, status_code",
    [
        # Assuming this creates a new user
        ("newuser", "newemail@test.com", "newpassword", {"message": "User created successfully"}, 201),
        # Trying to create the same user again should fail
        ("testuser", "testemail", "testpassword", {"error": "User already exists"}, 400),
    ],
)
def test_register_route(test_client, username, email, password, expected_response, status_code):
    # prepare_user_data fixture ensures a user is available for the second test case
    response = test_client.post("/register", json={"username": username, "email": email, "password": password})
    assert response.status_code == status_code
    assert response.get_json() == expected_response


@pytest.mark.parametrize(
    "username, password, expected_response, status_code, user_exists",
    [
        # Test case where user exists and password is correct
        ("testuser", "testpassword", {"message": "Login successful", "redirect": "/dashboard"}, 200, True),
        # Test case where user exists but password is wrong
        ("testuser", "wrongpassword", {"message": "Login was not successful", "error": "Invalid password for the given user"}, 401, True),
        # Test case for a non-existent user
        ("non-existentuser", "non-existentpassword", {"error": "User was not found in the database"}, 404, False),
    ],
)
def test_login_route(test_client, prepare_user_data, username, password, expected_response, status_code, user_exists):
    # Conditionally prepare user data based on the test case needs
    if user_exists:
        # The prepare_user_data fixture is used to ensure the user exists for the test
        prepare_user_data

    # Perform the login attempt
    response = test_client.post("/login", json={"username": username, "password": password})
    json_data = response.get_json()

    assert response.status_code == status_code
    # Assert for static fields
    assert json_data["message"] == expected_response["message"]
    assert json_data["redirect"] == expected_response["redirect"]
    # Assert the presence of the token without checking its value
    assert "token" in json_data
