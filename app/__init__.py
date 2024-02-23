from flask import Flask
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os

# Initialize the database
db = SQLAlchemy()
migrate = Migrate()


def create_app(test_config=None):
    # Create and configure the app
    app = Flask(__name__, static_folder="./app/static")

    # Ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # Get the secret key from the configuration fileOk
    app.secret_key = app.config["SECRET_KEY"]

    # Load environment variables from .env file
    load_dotenv()

    # Load the appropriate config file
    if os.environ.get("FLASK_ENV") == "development":
        app.config.from_object("instance.config.DevelopmentConfig")
    elif os.environ.get("FLASK_ENV") == "testing":
        app.config.from_object("instance.config.TestingConfig")
    elif os.environ.get("FLASK_ENV") == "production":
        app.config.from_object("instance.config.ProductionConfig")
    else:
        print("FLASK_ENV environment variable is not set!")

    # Initialize the database
    db.init_app(app)

    # Initialize the migration
    migrate.init_app(app, db)

    # Import and register the database models
    from app.users.models import User
    from app.movies.models import Movie
    from app.associations.models import bookmarks

    # Register blueprints within app context
    from app.main import main_bp
    from app.users import users_bp
    from app.movies import movies_bp
    from app.associations import associations_bp

    # Register the main blueprint
    app.register_blueprint(main_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(movies_bp)

    return app
