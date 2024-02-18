# This is the default configuration file for the application.
# Define classes for each configuration environment and inherit from the base class.

import os, secrets


class Config:
    """Base configuration"""

    DEBUG = False
    TESTING = False
    SECRET_KEY = secrets.token_hex(32)
    MYSQL_HOST = os.getenv("MYSQL_HOST")
    MYSQL_USER = os.getenv("MYSQL_USER")
    MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD")
    MYSQL_DB = os.getenv("MYSQL_DB")

    # SQLAlchemy configuration uri
    SQLALCHEMY_DATABASE_URI = f"mysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_HOST}:3306/{MYSQL_DB}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
    """Development configuration"""

    DEBUG = True
    TESTING = False


class TestingConfig(Config):
    """Testing configuration"""

    DEBUG = True
    TESTING = True

    # SQLAlchemy configuration uri
    


class ProductionConfig(Config):
    """Production configuration"""

    DEBUG = False
    TESTING = False
