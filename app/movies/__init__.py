from flask import Blueprint

movies_bp = Blueprint("movies_bp", __name__)

from . import routes
