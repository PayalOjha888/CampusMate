import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const Hero = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    function generateCaptcha() {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        return { num1, num2, result: num1 + num2 };
    }

    const handleLogin = (e) => {
        e.preventDefault();
        // Check captcha first
        if (parseInt(captcha) !== generatedCaptcha.result) {
            alert('Incorrect captcha!');
            return;
        }

        // Prepare login data
        const loginData = {
            rollNumber: username, // Assuming rollNumber is the username
            password: password,
        };

        // Make API call to the backend
        axios.post('http://localhost:5000/students/login', loginData)
            .then(response => {
                console.log('Login successful', response.data);
                login();  // Update authentication state
                localStorage.setItem('rollNumber', response.data.student.rollNumber); // Store roll number
                navigate('/dashboard');  // Navigate to the dashboard
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    alert(error.response.data.error);
                } else {
                    // Something happened in setting up the request
                    alert('Login failed. Please try again.');
                }
            });
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