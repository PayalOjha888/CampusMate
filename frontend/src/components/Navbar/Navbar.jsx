// src/components/Navbar/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h1>College Portal</h1>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/timetable">Timetable</Link>
                </li>
                <li>
                    <Link to="/previous-papers">Previous Year Papers</Link>
                </li>
                <li>
                    <Link to="/faculty-profiles">Faculty Profiles</Link>
                </li>
                <li>
                    <Link to="/notes">Notes</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/attendance">Attendance</Link>
                </li>
                <li>
                    <Link to="/results">Results</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;