# This is the default configuration file for the application.
# Define classes for each configuration environment and inherit from the base class.

import os, secrets


class Config:
    """Base configuration"""

    DEBUG = False
    TESTING = False
    SECRET_KEY = secrets.token_hex(32)


class DevelopmentConfig(Config):
    """Development configuration"""

    DEBUG = True
    TESTING = False


class TestingConfig(Config):
    """Testing configuration"""

    DEBUG = True
    TESTING = True


class ProductionConfig(Config):
    """Production configuration"""

    DEBUG = False
    TESTING = False
