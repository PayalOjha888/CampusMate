const express = require('express');
const router = express.Router();
const resultsController = require('../controllers/resultsController');

router.post('/', resultsController.addResult);

router.get('/student/:studentId', resultsController.getResultsByStudentId);

router.get('/course/:courseId', resultsController.getResultsByCourseId);

router.get('/:resultId', resultsController.getResultById);

router.put('/:resultId', resultsController.updateResult);

router.delete('/:resultId', resultsController.deleteResult);

module.exports = router;