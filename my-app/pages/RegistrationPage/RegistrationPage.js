// RegistrationPage.js
import React, { useState } from 'react';
import './RegistrationPage.css';
import HomeHeader from '../HomeHeader';
import Footer from '../Footer';

function RegistrationPage() {
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Here you can handle the registration logic
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            });

        } catch (error) {
            console.error('Registration has failed', error);
        }
    };

    return (
        <div className="registration-container-box">
            <HomeHeader />
            <div className="registration-container">
                <form className="registration-form" onSubmit={handleSubmit}>
                    <h2 className="registration-title">Register</h2>
                    <div className="input-group">
                        <input
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={userDetails.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={userDetails.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={userDetails.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={userDetails.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="register-button" type="submit">Register</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default RegistrationPage;
