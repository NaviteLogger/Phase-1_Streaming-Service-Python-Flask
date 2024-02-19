import pytest
from app import create_app, db
from app.movies.models import Movie


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

        # Bind the session to the transaction
        options = dict(bind=connection, binds={})
        session = db.create_scoped_session(options=options)
        db.session = session

        """
        This opens a context that provides a test client. This client can be used to send requests
        to the Flask application without running a server.
        """
        with app.test_client() as testing_client:
            with app.app_context():
                yield testing_client

    # Roll back the transaction (undoing all database operations) and close the connection
    transaction.rollback()
    connection.close()
    session.remove()


@pytest.fixture(scope="function")
def prepare_database():
    # Setup that needs to be done before each test
    test_movie = Movie(title="Edge of Tomorrow", year=2014, director="Doug Liman")
    db.session.add(test_movie)

    yield  # This allows the test to run with the setup in place

    # The rollback in the test_client fixture will undo any changes after the yield


def test_example_route(test_client):
    response = test_client.get("/")
    assert "Hello, world!" in response.data.decode("utf-8")


def test_search_for_movie(test_client):
    response = test_client.post("/search-for-movie?query=Edge%20of%20Tomorrow")
    assert response.status_code == 200
    expected_response = [{"id": 1, "title": "Edge of Tomorrow", "year": 2014, "director": "Doug Liman"}]
    assert response.get_json() == expected_response


# Add multiple test cases for the register route
@pytest.mark.parametrize(
    "username, email, password, expected_response, status_code",
    [
        ("testuser", "testemail", "testpassword", {"message": "User created successfully"}, 201),
        ("testuser", "testemail", "testpassword", {"error": "User already exists"}, 400),
    ],
)
def test_register_route(test_client, username, email, password, expected_response, status_code):
    response = test_client.post("/register", json={"username": username, "email": email, "password": password})
    assert response.status_code == status_code
    assert response.get_json() == expected_response


# Add multiple test cases for the login route
@pytest.mark.parametrize(
    "username, password, expected_response, status_code",
    [
        ("non-existentuser", "non-existentpassword", {"error": "User was not found in the database"}, 404),
        ("testuser", "testpassword", {"message": "Login successful", "redirect": "/dashboard"}, 200),
        ("testuser", "wrongpassword", {"message": "Login was not successful", "error": "Invalid password for the given user"}, 401),
    ],
)
def test_login_route(test_client, username, password, expected_response, status_code):
    response = test_client.post("/login", json={"username": username, "password": password})
    assert response.status_code == status_code
    assert response.get_json() == expected_response
