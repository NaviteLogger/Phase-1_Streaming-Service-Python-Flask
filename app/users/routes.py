from flask import Blueprint, request, jsonify
from app import db
from . import users_bp


@users_bp.route("/login", methods=["GET"])
def login():
    # Parse username and password from request
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
