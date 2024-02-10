// UserInfoBox.js
import React from 'react';
import './UserInfoBox.css'; // Import the CSS styles specific to the UserInfoBox

const UserInfoBox = ({ username }) => {
    return (
        <div className="user-info-box">
            <h3>Welcome, {username}!</h3>
            <p>You have entered your account.</p>
        </div>
    );
};

export default UserInfoBox;
