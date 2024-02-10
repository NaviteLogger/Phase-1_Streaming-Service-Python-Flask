// UserPanel.js
import React from 'react';
import MovieBrowser from '../MovieBrowser/MovieBrowser.js'; // Component for browsing movies
import MovieRequest from '../MovieRequest/MovieRequest.js'; // Component for requesting movies
import BookmarkedMovies from '../BookmarkedMovies/BookmarkedMovies.js'; // Component for displaying bookmarked movies
//import Header from './Header'; // Assuming you export your Header in index.js
//import Footer from './Footer'; // Assuming you export your Footer in index.js

function UserPanel() {
    return (
        <div className="user-panel">
            <main>
                <MovieBrowser />
                <MovieRequest />
                <BookmarkedMovies />
            </main>
        </div>
    );
}

export default UserPanel;
