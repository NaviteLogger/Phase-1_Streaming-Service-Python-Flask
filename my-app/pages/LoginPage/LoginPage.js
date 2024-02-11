// LoginPage.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import './LoginPage.css';
import HomeHeader from '../HomeHeader';
import Footer from '../Footer';

function LoginPage() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const router = useRouter();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the login logic
        console.log('Login credentials:', credentials);
    };

    return (
        <div className="login-container-box">
            <HomeHeader />
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="login-title">Login</h2>
                    <div className="input-group">
                        <input
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;
