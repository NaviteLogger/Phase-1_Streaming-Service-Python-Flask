from app import db


class Movie(db.Model):
    __tablename__ = "movies"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    director = db.Column(db.String(100), nullable=False)
    genre = db.Column(db.String(100), nullable=False)

    def serialize(self):
        """Serialize the Movie object to a dictionary."""
        return {"id": self.id, "title": self.title, "year": self.year, "director": self.director, "genre": self.genre}

    def serialize_without_id(self):
        """Serialize the Movie object to a dictionary, including a boolean indicating whether the movie is bookmarked."""
        return {"title": self.title, "year": self.year, "director": self.director, "genre": self.genre}
