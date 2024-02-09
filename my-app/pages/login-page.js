// login-page.js
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here, integrate with your authentication service
        console.log(email, password); // For demonstration
    };

    return (
        <>
            <Head>
                <title>Login | Streamify</title>
            </Head>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Log In</button>
                    <p>
                        Don't have an account? <Link href="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
        </>
    );
}
