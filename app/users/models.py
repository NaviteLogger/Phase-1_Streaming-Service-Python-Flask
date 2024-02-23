from werkzeug.security import generate_password_hash, check_password_hash
from app import db
from app.associations.models import bookmarks


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    registration_date = db.Column(db.DateTime, server_default=db.func.now())
    bookmarked_movies = db.relationship("Movie", secondary=bookmarks, backref=db.backref("bookmarked_by", lazy="dynamic"))

    def set_password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)
