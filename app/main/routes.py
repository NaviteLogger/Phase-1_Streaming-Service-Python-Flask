from flask import Blueprint, render_template, current_app, request, jsonify, session
import requests


main_bp = Blueprint("main_bp", __name__)


@main_bp.route("/")
def index():
    return render_template("index.html")


@main_bp.route("/test-database-connection")
def test_database_connection():
    cursor = current_app.mysql.connection.cursor()
    cursor.execute("SELECT *")
