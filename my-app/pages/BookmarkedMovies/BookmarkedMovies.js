// BookmarkedMovies.js
import React from 'react';

function BookmarkedMovies() {
    // This data would typically come from a database or state management store
    const bookmarkedMovies = [
        // Example movie data
        { id: 1, title: 'Inception', year: '2010' },
        // ... other bookmarked movies
    ];

    return (
        <section className="bookmarked-movies">
            <h2>Bookmarked Movies</h2>
            <div className="movies-list">
                {bookmarkedMovies.map((movie) => (
                    <div key={movie.id} className="movie">
                        <h3>{movie.title} ({movie.year})</h3>
                        <button>Watch</button>
                        {/* Add buttons or links for downloading or removing from bookmarks */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BookmarkedMovies;
