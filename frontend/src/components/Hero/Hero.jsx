// src/components/Hero/Hero.jsx
import React, { useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());

    function generateCaptcha() {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        return { num1, num2, result: num1 + num2 };
    }

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        if (parseInt(captcha) === generatedCaptcha.result) {
            console.log('Login successful');
            // Handle successful login
        } else {
            alert('Incorrect captcha!');
        }
    };

    return (
        <div className={styles.heroContainer}>
            <div className={styles.textSection}>
                <h1>Connect,<br />Learn,<br />Thrive</h1>
                <h2>Welcome to Your College Portal</h2>
            </div>
            <div className={styles.loginSection}>
                <h3>Login to Your Account</h3>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className={styles.captchaContainer}>
                        <span>{generatedCaptcha.num1} + {generatedCaptcha.num2} = ?</span>
                        <input
                            type="text"
                            placeholder="Enter Captcha"
                            value={captcha}
                            onChange={(e) => setCaptcha(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label>Remember Me</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Hero;