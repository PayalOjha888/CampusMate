import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styles from './Dashboard.module.css';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [profile, setProfile] = useState({});
    const [events, setEvents] = useState([]);
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const rollNumber = localStorage.getItem('rollNumber'); // Retrieve roll number from local storage

    useEffect(() => {
        axios.get(`http://localhost:5000/students/${rollNumber}/profile`)
            .then(response => setProfile(response.data.profile))
            .catch(error => console.error('Error fetching profile:', error));

        axios.get('http://localhost:5000/students/events')
            .then(response => setEvents(response.data))
            .catch(error => console.error('Error fetching events:', error));
    }, [rollNumber]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.sidebar}>
                <h2>Profile</h2>
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Roll Number:</strong> {profile.rollNumber}</p>
                <p><strong>Course:</strong> {profile.course}</p>
                <p><strong>Specialization:</strong> {profile.specialization}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Semester:</strong> {profile.semester}</p>
                <nav>
                    <ul>
                        <li><a href="#timetable">Timetable</a></li>
                        <li><a href="#notes">Notes</a></li>
                        <li><a href="#attendance">Attendance</a></li>
                        <li><a href="#facultyProfiles">Faculty Profiles</a></li>
                    </ul>
                </nav>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className={styles.mainContent}>
                <h2>Upcoming Events</h2>
                <div className={styles.events}>
                    {events.map(event => (
                        <div key={event.id} className={styles.eventCard}>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Location:</strong> {event.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;