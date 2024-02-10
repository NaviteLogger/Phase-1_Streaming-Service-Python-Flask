// UserPanel.js
import React from 'react';
import MovieBrowser from '../MovieBrowser/MovieBrowser.js'; // Component for browsing movies
import MovieRequest from '../MovieRequest/MovieRequest.js'; // Component for requesting movies
import BookmarkedMovies from '../BookmarkedMovies/BookmarkedMovies.js'; // Component for displaying bookmarked movies
import './UserPanel.css';
import Header from '../HomeHeader';
import Footer from '../Footer';

function UserPanel() {
    return (
        <div className="user-panel-box">
            <Header />
            <div className="user-panel">
                <main>
                    <MovieBrowser />
                    <MovieRequest />
                    <BookmarkedMovies />
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default UserPanel;
