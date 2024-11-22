import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Sidebar.module.css';
import { useNavigate } from 'react-router-dom';
import Timetable from '../Timetable/Timetable';
import Notes from '../Notes/Notes';

const Sidebar = ({ rollNumber }) => {
    const [profile, setProfile] = useState({});
    const [todayClasses, setTodayClasses] = useState([]);
    const [selectedContent, setSelectedContent] = useState(''); // State to manage selected content
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/students/${rollNumber}/profile`)
            .then(response => setProfile(response.data.profile))
            .catch(error => console.error('Error fetching profile:', error));

        axios.get(`http://localhost:5000/timetables/${rollNumber}/today`)
            .then(response => setTodayClasses(response.data))
            .catch(error => console.error('Error fetching today\'s classes:', error));
    }, [rollNumber]);

    const handleContentChange = (content) => {
        setSelectedContent(content);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const renderContent = () => {
        if (selectedContent === 'timetable') {
            return <Timetable rollNumber={rollNumber} />;
        } else if (selectedContent === 'notes') {
            return <Notes rollNumber={rollNumber} />;
        }
        return null;
    };

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebar}>
                <h2>Profile</h2>
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Roll Number:</strong> {profile.rollNumber}</p>
                <p><strong>Course:</strong> {profile.course}</p>
                <p><strong>Specialization:</strong> {profile.specialization}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Semester:</strong> {profile.semester}</p>

                <h2>Today's Classes</h2>
                {todayClasses.length > 0 ? (
                    <ul>
                        {todayClasses.map((entry, index) => (
                            <li key={index}>
                                <p><strong>{entry.subject_name}</strong></p>
                                <p>{entry.start_time} - {entry.end_time}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No classes scheduled for today.</p>
                )}
                <nav>
                    <ul>
                        <li><a href="#" onClick={() => handleContentChange('timetable')}>Timetable</a></li>
                        <li><a href="#" onClick={() => handleContentChange('notes')}>Notes</a></li>
                        <li><a href="#attendance">Attendance</a></li>
                        <li><a href="#facultyProfiles">Faculty Profiles</a></li>
                    </ul>
                </nav>
                <button onClick={handleBackClick}>Back</button>
            </div>
            <div className={styles.mainContent}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Sidebar;