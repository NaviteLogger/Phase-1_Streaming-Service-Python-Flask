from flask import request, jsonify, current_app as app
from . import movies_bp
from .models import Movie, db


@movies_bp.route("/search-for-movies", methods=["POST"])
def search_for_movies():
    data = request.get_json()
    title = data.get("title")
