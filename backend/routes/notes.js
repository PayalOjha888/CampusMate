const express = require('express');
const multer = require('multer');
const router = express.Router();
const db = require('../config/db');

// Set up multer storage (in memory, as we are storing in DB)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route for uploading a note
router.post('/upload', upload.single('file'), (req, res) => {
    const { title, subject_code, uploader } = req.body;
    const fileContent = req.file.buffer;  // The binary content of the PDF

    if (!title || !subject_code || !uploader || !fileContent) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    const query = 'INSERT INTO notes (title, subject_code, uploader, file_content) VALUES (?, ?, ?, ?)';
    db.query(query, [title, subject_code, uploader, fileContent], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed', details: err });
        }
        res.json({ message: 'Note uploaded successfully!' });
    });
});

// Route to fetch notes based on subject code
router.get('/fetch', (req, res) => {
    const { subject_code } = req.query;

    const query = 'SELECT * FROM notes WHERE subject_code = ?';
    db.query(query, [subject_code], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed', details: err });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'No notes found for this subject' });
        }

        const note = results[0]; // Assuming one note per subject for simplicity

        // Send the PDF file as a downloadable response
        res.contentType('application/pdf');
        res.send(note.file_content); // Send the binary content as a PDF file
    });
});

module.exports = router;