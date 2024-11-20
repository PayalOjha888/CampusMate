const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/student');
const cors = require('cors');
const helmet = require('helmet');
const notesRoutes = require('./routes/notes');
const timetableRoutes = require('./routes/timetable');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(helmet());

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/students', studentRoutes);
app.use('/timetables', timetableRoutes);

app.get('/', (req, res) => {
    res.send("Campus mate backend with mysql is running");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});