const mysql = require('mysql2');
const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'campus_mate'
});

const csvFilePath = path.join(__dirname, 'path/to/your/attendance.csv');

fs.createReadStream(csvFilePath)
    .pipe(csv.parse({ headers: true }))
    .on('data', (row) => {
        const query = 'INSERT INTO attendance (roll_number, date, status) VALUES (?, ?, ?)';
        const values = [row.roll_number, row.date, row.status];

        connection.query(query, values, (err) => {
            if (err) {
                console.error('Database query failed:', err);
            } else {
                console.log('Row inserted successfully');
            }
        });
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
        connection.end();
    });
