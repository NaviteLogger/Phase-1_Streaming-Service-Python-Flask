import pytest
from flask import url_for
from app import create_app, db
from app.users.models import User


@pytest.fixture
def client():
    app = create_app(TestConfig)
    app.config["TESTING"] = True
    client = app.test_client()

    with app.app_context():
        db.create_all()  # Create test database tables
        # Optionally, you can preload some test data here

    yield client

    with app.app_context():
        db.drop_all()  # Clean up the database
