from flask import Blueprint, request, jsonify
from app import db
from . import users_bp
from .models import User
import jwt, datetime


@users_bp.route("/login", methods=["GET"])
def login():
    # Parse username and password from request
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not username:
        return jsonify({"error": "Missing username"}), 400
    elif not password:
        return jsonify({"error": "Missing password"}), 400

    user = User.query.filter_by(username=username).first()

    if not user:
        return jsonify({"error": "User was not found in the database"}), 404

    if User.check_password(user, password):
        # Generate a JWT token
        token = jwt.encode({"user_id": user.id, "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30)})

        return jsonify({"message": "Login successful", "redirect": "/dashboard"}), 200
    else:
        return jsonify({"message": "Login was not successful", "error": "Invalid password for the given user "}), 401
