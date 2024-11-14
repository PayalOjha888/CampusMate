const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const attendanceRoutes = require('./routes/attendanceRoutes');
const facultyRoutes = require('./routes/facultyRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const notesRoutes = require('./routes/notesRoutes');
const resultsRoutes = require('./routes/resultsRoutes');
const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/attendance', attendanceRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/results', resultsRoutes);
app.use('/api/students', studentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});