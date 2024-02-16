// MovieBrowser.js
import React, { useEffect, useState } from 'react';
import './MovieBrowser.css';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';

function MovieBrowser() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (!searchTerm) setSuggestions([]);
        else {
            // Fetch movie suggestions from the database using searchTerm
        }
        // setSuggestions(responseFromDatabase);
    });

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchTerm) return null;

        try {
            const response = await fetch(`/search-for-movie?query=${encodeURIComponent(searchTerm)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ searchTerm }),
            });

            if (!response.ok) {
                setErrorMessage('An error has occurred during the search process. Please try again.');
            }

            if (response.status === 200) {
                const data = await response.json();
                setSearchResults(data);
            }


        } catch (error) {
            console.error('Failed to fetch search results:', error);
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
            {/* Display the search results*/}
            <div className="search-results">
                {searchResults.map((movie) => (
                    <div key={movie.id} className="movie-result">
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </div>
                ))}
            </div>
            <div className="search-error-message">{errorMessage}</div>
        </section>
    );
}

export default MovieBrowser;
