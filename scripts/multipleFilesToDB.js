const fs = require('fs');
const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'campus_mate'
});

function readPdfFile(filePath){
    return fs.readFileSync(filePath);
}

const pdfDirectory = path.join(__dirname, 'path/to/your/pdf/directory');

fs.readdir(pdfDirectory, (err, files) => {
    if(err){
        console.log('Failed to read directory: '. err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(pdfDirectory, file);
        const binaryData = readPdfFile(filePath);

        const query = `INSERT INTO notes (course, specialization, semester, subject_code, subject_name, uploaded_by, file_content, file_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            'B.Tech',
            'CS',
            5,
            'CS-501',
            'TOC',
            'University',
            binaryData,
            file //file name
        ];

        connection.query(query, values, (err, results) => {
            if(err) {
                console.error('Database query failed: ', err);
            } else {
                console.log('File uploaded successfully: ', results);
            }
        });
    });
    connection.end();
});

// to run
// node multipleFilesToDB.js