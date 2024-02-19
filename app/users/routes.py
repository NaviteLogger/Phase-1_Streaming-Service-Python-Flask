from flask import request, jsonify, current_app as app
from . import users_bp
from .models import User, db
from werkzeug.security import generate_password_hash
import jwt, datetime


@users_bp.route("/login", methods=["POST"])
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

    if user.check_password(password):
        # Generate a JWT token
        token = jwt.encode({"user_id": user.id, "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config["SECRET_KEY"], algorithm="HS256")

        return jsonify({"message": "Login successful", "token": token, "redirect": "/dashboard"}), 200
    else:
        return jsonify({"message": "Login was not successful", "error": "Invalid password for the given user"}), 401


@users_bp.route("/register", methods=["POST"])
def register():
    # Parse username, email and password from request
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username:
        return jsonify({"error": "Missing username"}), 400
    elif not email:
        return jsonify({"error": "Missing email"}), 400
    elif not password:
        return jsonify({"error": "Missing password"}), 400

    # Check whether the user already exists
    username_check = User.query.filter(User.username == username).first()
    if username_check:
        return jsonify({"error": "User already exists"}), 400

    # Check whether the email already exists
    email_check = User.query.filter(User.email == email).first()
    if email_check:
        return jsonify({"error": "Email already exists"}), 400

    # Hash the password
    hashed_password = generate_password_hash(password)

    # Finally, create a new user
    new_user = User(username=username, email=email, hashed_password=hashed_password)

    # Add the new user to the database
    db.session.add(new_user)
    try:
        db.session.commit()
        return jsonify({"message": "User created successfully"}), 201
    except Exception as e:
        db.session.rollback()
        print("An error has occurred while inserting the new user into the database", e)
        return jsonify({"error": "An error has occurred while inserting the new user into the database"}), 500
