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
    response = client.post("/movies/search-for-movie?query=the")
    assert response.status_code == 200
    assert response.json == []
