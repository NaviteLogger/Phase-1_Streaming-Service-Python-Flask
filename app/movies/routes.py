from flask import request, jsonify, current_app as app
from . import movies_bp
from .models import Movie, db


@app.route("/search-for-movie", methods=["POST"])
def search_for_movie():
    query = request.args.get("query")  # Extract query parameter from the request

    # Check if the query parameter is provided
    if not query:
        return jsonify({"error": "Missing query parameter"}), 400  # Return error if query is missing

    # Attempt to find the movie in the database
    movie = Movie.query.filter_by(title=query).first()

    # Check if the movie was found
    if movie is None:
        return jsonify({"error": "Movie not found"}), 404  # Return error if movie is not found

    # If the movie is found, return the movie details
    movie_data = {"title": movie.title, "year": movie.year, "director": movie.director, "genre": movie.genre}

    return jsonify(movie_data), 200
