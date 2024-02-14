// MovieBrowser.js
import React, { useEffect, useState } from 'react';
import './MovieBrowser.css';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';

function MovieBrowser() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (!searchTerm) setSuggestions([]);
    });

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality using searchTerm
    };

    return (
        <section className="movie-browser">
            <h2>Browse Movies</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {/* Here you would render the movies fetched from the database */}
        </section>
    );
}

export default MovieBrowser;
