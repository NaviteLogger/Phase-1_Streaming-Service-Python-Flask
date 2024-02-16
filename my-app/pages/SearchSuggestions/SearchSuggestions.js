import React from 'react';
import './SearchSuggestions.css';

const SearchSuggestions = ({ suggestions }) => {
    if (!suggestions || !suggestions.length || !Array.isArray(suggestions)) {
        return null;
    }

    return (
        <ul className="search-suggestions">
            {suggestions.map((movie, index) => (
                <li key={index}>{movie.title}</li>
            ))}
        </ul>
    );
}

SearchSuggestions.defaultProps = {
    suggestions: [],
};

export default SearchSuggestions;