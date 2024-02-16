from flask import current_app, send_from_directory
from sqlalchemy import text
from app import db
from . import main_bp


# @main_bp.route("/")
# def index():
#     return send_from_directory(current_app.static_folder, "./
