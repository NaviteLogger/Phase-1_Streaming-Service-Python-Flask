// MovieRequest.js
import React, { useState } from 'react';

function MovieRequest() {
    const [requestDetails, setRequestDetails] = useState({
        title: '',
        language: '',
        quality: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequestDetails({ ...requestDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement the logic to handle the movie request
    };

    return (
        <section className="movie-request">
            <h2>Request a Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder="Movie Title"
                    value={requestDetails.title}
                    onChange={handleChange}
                    required
                />
                <input
                    name="language"
                    type="text"
                    placeholder="Language"
                    value={requestDetails.language}
                    onChange={handleChange}
                    required
                />
                <input
                    name="quality"
                    type="text"
                    placeholder="Quality (e.g. 1080p)"
                    value={requestDetails.quality}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Request Movie</button>
            </form>
        </section>
    );
}

export default MovieRequest;
