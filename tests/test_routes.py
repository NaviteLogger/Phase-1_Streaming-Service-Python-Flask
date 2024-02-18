import pytest
from app import create_app, db
from app.users.models import User


@pytest.fixture
def app():
    app = create_app()
    yield app


@pytest.fixture
def client(app):
    return app.test_client()


def test_example_route(client):
    response = client.get("/")
    assert "Hello, world!" in response.data.decode("utf-8")


def test_search_for_movie(client):
    response = client.post("/search-for-movie?query=Edge%20of%20Tomorrow")
    assert response.status_code == 200

    # Expected response
    expected_response = [{"id": 1, "title": "Edge of Tomorrow", "year": 2014, "director": "Doug Liman"}]
    assert response.get_json() == expected_response


# Parametrize the login route test
@pytest.mark.parametrize(
    "username, password, expected_response, status_code",
    [
        ("testuser", "testpassword", {"error": "User was not found in the database"}, 404),
    ],
)
def test_login_route(client, username, password, expected_response, status_code):
    response = client.post("/login", json={"username": username, "password": password})
    assert response.status_code == status_code
    assert response.get_json() == expected_response

# Parametrize the register route test
@pytest.mark.parametrize(
    "username, email, password, expected_response, status_code",
    [
        ("testuser", "testemail", "testpassword", {"message": "User created successfully"}, 201),
        ("testuser", "testemail", "testpassword", {"error": "User already exists"}, 400),
    ],
)