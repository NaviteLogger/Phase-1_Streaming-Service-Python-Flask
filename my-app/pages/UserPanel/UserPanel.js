// UserPanel.js
import React from 'react';
import MovieBrowser from './MovieBrowser'; // Component for browsing movies
import MovieRequest from './MovieRequest'; // Component for requesting movies
import BookmarkedMovies from './BookmarkedMovies'; // Component for displaying bookmarked movies
import Header from './Header'; // Assuming you export your Header in index.js
import Footer from './Footer'; // Assuming you export your Footer in index.js

function UserPanel() {
    return (
        <div className="user-panel">
            <Header />
            <main>
                <MovieBrowser />
                <MovieRequest />
                <BookmarkedMovies />
            </main>
            <Footer />
        </div>
    );
}

export default UserPanel;
