const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/', attendanceController.submitAttendance);

router.get('/:studentId', attendanceController.getAttendance);

module.exports = router;