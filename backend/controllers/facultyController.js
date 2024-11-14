const db = require('../config/db'); 
const Faculty = require('../models/Faculty'); 

exports.addFaculty = (req, res) => {
    const { fullName, email, department, coursesTaught } = req.body;

    const facultyMember = new Faculty(fullName, email, department, coursesTaught);

    const query = 'INSERT INTO faculty (full_name, email, department, courses_taught) VALUES (?, ?, ?, ?)';
    
    db.query(query, [facultyMember.fullName, facultyMember.email, facultyMember.department, facultyMember.coursesTaught], (error) => {
        if (error) {
            console.error('Error adding faculty:', error);
            return res.status(500).json({ error: 'Failed to add faculty member' });
        }
        res.status(201).json({ message: 'Faculty member added successfully!' });
    });
};

exports.getAllFaculty = (req, res) => {

    const query = 'SELECT * FROM faculty ORDER BY full_name ASC';
    
    db.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching faculty records:', error);
            return res.status(500).json({ error: 'Failed to fetch faculty records' });
        }
        res.status(200).json(results); 
    });
};

exports.getFacultyById = (req, res) => {
    const { facultyId } = req.params;

    const query = 'SELECT * FROM faculty WHERE faculty_id = ?';
    
    db.query(query, [facultyId], (error, results) => {
        if (error) {
            console.error('Error fetching faculty record:', error);
            return res.status(500).json({ error: 'Failed to fetch faculty record' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }
        res.status(200).json(results[0]);
    });
};

exports.updateFaculty = (req, res) => {
    const { facultyId } = req.params;
    const { fullName, email, department, coursesTaught } = req.body;

    const query = 'UPDATE faculty SET full_name = ?, email = ?, department = ?, courses_taught = ? WHERE faculty_id = ?';
    
    db.query(query, [fullName, email, department, coursesTaught, facultyId], (error) => {
        if (error) {
            console.error('Error updating faculty:', error);
            return res.status(500).json({ error: 'Failed to update faculty member' });
        }
        res.status(200).json({ message: 'Faculty member updated successfully!' });
    });
};

exports.deleteFaculty = (req, res) => {
    const { facultyId } = req.params;
    const query = 'DELETE FROM faculty WHERE faculty_id = ?';
    
    db.query(query, [facultyId], (error) => {
        if (error) {
            console.error('Error deleting faculty:', error);
            return res.status(500).json({ error: 'Failed to delete faculty member' });
        }
        res.status(200).json({ message: 'Faculty member deleted successfully!' });
    });
};