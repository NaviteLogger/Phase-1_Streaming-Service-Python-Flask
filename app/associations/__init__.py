from flask import Blueprint

associations_bp = Blueprint("associations_bp", __name__)

from . import routes
