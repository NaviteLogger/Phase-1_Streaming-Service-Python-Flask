from flask import request, jsonify, current_app as app
from . import movies_bp
from .models import Movie, db
from app.associations.models import bookmarks
from app.authentication.routes import token_required


@movies_bp.route("/search-for-movie", methods=["POST"])
def search_for_movie():
    query = request.args.get("query", "")

    if not query:
        return jsonify({"status": "error", "message": "Missing query parameter"}), 400

    # Search for movies that match the query
    movies = Movie.query.filter(Movie.title.ilike(f"%{query}%")).limit(5).all()

    # Check whether any movies were found
    if not movies:
        return jsonify({"status": "error", "message": "No movies found"}), 404

    # Serialize the movies to JSON
    movies_json = jsonify([movie.serialize() for movie in movies])

    return movies_json, 200


@movies_bp.route("/bookmark-movie", methods=["POST"])
@token_required
def bookmark_movie():
    data = request.get_json()

    if not data:
        return jsonify({"status": "error", "message": "Missing JSON body"}), 400

    movie_title = data.get("title")

    # Query the database for the movie id based on the title
    movie = Movie.query.filter_by(title=movie_title).first()

    if not movie:
        return jsonify({"status": "error", "message": "The requested movie was not found in the database (this probably indicates a frontend bug)"}), 404

    # Add the movie to the user's bookmarks
    current_user = app.current_user
    db.session.commit()

    return jsonify({"status": "success", "message": f"{movie.title} has been added to your bookmarks"}), 200
