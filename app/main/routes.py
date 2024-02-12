from flask import Blueprint, current_app
from sqlalchemy import text
from app import db
from . import main_bp


# @main_bp.route("/")
# def index():
#     return render_template("index.html")


@main_bp.route("/")
def test_database_connection():
    with current_app.app_context():
        try:
            sql = text("SELECT VERSION()")
            result = db.session.execute(sql)
            version = result.fetchone()[0]

            return "Database connection is working", 200
        except Exception as e:
            return f"Database connection is not working: {str(e)}", 500
