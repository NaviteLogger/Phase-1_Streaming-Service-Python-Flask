import React from 'react';

const SearchSuggestions = ({ suggestions }) => {
    if (!suggestions.length) return null;

    return (
        <ul className="search-suggestions">
            {suggestions.map((movie, index) => (
                <li key={index}>{movie.title}</li>
            ))}
        </ul>
    );
}

export default SearchSuggestions;