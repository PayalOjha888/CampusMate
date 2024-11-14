const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.post('/', feedbackController.submitFeedback);

router.get('/student/:studentId', feedbackController.getFeedbackByStudentId);

router.get('/course/:courseName', feedbackController.getFeedbackByCourseName);

module.exports = router;