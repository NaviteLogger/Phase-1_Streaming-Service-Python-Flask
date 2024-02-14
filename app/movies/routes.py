from flask import request, jsonify, current_app as app
from . import movies_bp
from .models import Movie, db


@movies_bp.route("/search-for-movie", methods=["POST"])
def search_for_movie():
    query = request.args.get("query", "")

    if not query:
        return jsonify({"error": "Missing query"}), 400
