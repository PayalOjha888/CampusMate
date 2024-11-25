const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'campus_mate'
});

function readPdfFile(filePath){
    return fs.readFileSync(filePath);
}

const pdfPath = path.join(__dirname, 'path/to/your/file.pdf')
const binaryData = readFile(pdfPath);

const query = `INSERT INTO notes (course, specialization, semester, subject_code, subject_name, uploaded_by, file_content, file_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

const values = [
    'B.tech',
    'CS',
    5,
    'CS-501',
    'TOC',
    'University',
    binaryData,
    'notes.pdf'
];

connection.query(query, values, (err, results) => {
    if(err){
        console.error('Database query failed: ', err);
    }
    else {
        console.log('File uploaded successfully: ', results);
    }
    connection.end();
});