const db = require('../config/db'); 
const Attendance = require('../models/Attendance');

exports.submitAttendance = (req, res) => {
    const { studentId, courseId, date, status } = req.body;

    const attendanceRecord = new Attendance(studentId, courseId, date, status);

    const query = 'INSERT INTO attendance (student_id, course_id, date, status) VALUES (?, ?, ?, ?)';
    
    db.query(query, [attendanceRecord.studentId, attendanceRecord.courseId, attendanceRecord.date, attendanceRecord.status], (error) => {
        if (error) {
            console.error('Error inserting attendance:', error);
            return res.status(500).json({ error: 'Failed to submit attendance' });
        }
        res.status(201).json({ message: 'Attendance submitted successfully!' });
    });
};

exports.getAttendance = (req, res) => {
    const { studentId } = req.params; 

    const query = 'SELECT * FROM attendance WHERE student_id = ? ORDER BY date DESC';
    
    db.query(query, [studentId], (error, results) => {
        if (error) {
            console.error('Error fetching attendance records:', error);
            return res.status(500).json({ error: 'Failed to fetch attendance records' });
        }
        res.status(200).json(results); 
    });
};