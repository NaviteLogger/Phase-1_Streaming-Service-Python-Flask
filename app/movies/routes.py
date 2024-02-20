from flask import request, jsonify, current_app as app
from . import movies_bp
from .models import Movie, db


@movies_bp.route("/search-for-movie", methods=["POST"])
def search_for_movie():
    query = request.args.get("query", "")

    if not query:
        return jsonify({"error": "Missing query parameter"}), 400

    # Search for movies that match the query
    movies = Movie.query.filter(Movie.title.ilike(f"%{query}%")).limit(5).all()

    # Check whether any movies were found
    if not movies:
        return jsonify({"error": "No movies found"}), 404

    # Serialize the movies to JSON
    movies_json = jsonify([movie.serialize() for movie in movies])

    return movies_json, 200
