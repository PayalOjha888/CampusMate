import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const rollNumber = localStorage.getItem('rollNumber'); // Retrieve rollNumber from localStorage

    return (
        <div className={styles.dashboard}>
            <Sidebar rollNumber={rollNumber} />
        </div>
    );
};

export default Dashboard;