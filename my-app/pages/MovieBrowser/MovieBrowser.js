// MovieBrowser.js
import React, { useEffect, useState } from 'react';
import './MovieBrowser.css';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';

function MovieBrowser() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (!searchTerm) setSuggestions([]);
        else {
            // Fetch movie suggestions from the database using searchTerm
        }
        // setSuggestions(responseFromDatabase);
    });

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchTerm) return;

        try {
            const response = await fetch(`/search-for-movie?query=${encodeURIComponent(searchTerm)}`);
            const data = await response.json();
            setSearchResults(data);
        }
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
            <SearchSuggestions suggestions={suggestions} />
            {/* Here you would render the movies fetched from the database */}
        </section>
    );
}

export default MovieBrowser;
