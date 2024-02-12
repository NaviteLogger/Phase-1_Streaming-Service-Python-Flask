from flask import Blueprint

authentication_bp = Blueprint("authentication_bp", __name__)

from . import routes
