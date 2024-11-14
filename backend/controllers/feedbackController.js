const db = require('../config/db'); 
const Feedback = require('../models/Feedback'); 

exports.submitFeedback = (req, res) => {
    const { studentId, feedbackText, courseName } = req.body;

    const feedbackRecord = new Feedback(studentId, feedbackText, courseName);

    const query = 'INSERT INTO feedback (student_id, feedback_text, course_name) VALUES (?, ?, ?)';
    
    db.query(query, [feedbackRecord.studentId, feedbackRecord.feedbackText, feedbackRecord.courseName], (error) => {
        if (error) {
            console.error('Error inserting feedback:', error);
            return res.status(500).json({ error: 'Failed to submit feedback' });
        }
        res.status(201).json({ message: 'Feedback submitted successfully!' });
    });
};

exports.getFeedbackByStudentId = (req, res) => {
    const { studentId } = req.params;

    const query = 'SELECT * FROM feedback WHERE student_id = ? ORDER BY created_at DESC';
    
    db.query(query, [studentId], (error, results) => {
        if (error) {
            console.error('Error fetching feedback records:', error);
            return res.status(500).json({ error: 'Failed to fetch feedback records' });
        }
        res.status(200).json(results); 
    });
};

exports.getFeedbackByCourseName = (req, res) => {
    const { courseName } = req.params; 
    const query = 'SELECT * FROM feedback WHERE course_name = ? ORDER BY created_at DESC';
    
    db.query(query, [courseName], (error, results) => {
        if (error) {
            console.error('Error fetching feedback records:', error);
            return res.status(500).json({ error: 'Failed to fetch feedback records' });
        }
        res.status(200).json(results);
    });
};