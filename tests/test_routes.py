import pytest
from app import create_app, db
from app.users.models import User


@pytest.fixture
def app():
    # Assuming FLASK_ENV is already set to "testing" in the environment
    app = create_app()
    with app.app_context():
        db.create_all()
    yield app
    with app.app_context():
        db.drop_all()


@pytest.fixture
def client(app):
    return app.test_client()


def test_example_route(client):
    response = client.get("/")
    assert "Hello, world!" in response.data.decode("utf-8")
