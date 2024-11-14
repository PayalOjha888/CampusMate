const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');

router.post('/', facultyController.addFaculty);

router.get('/', facultyController.getAllFaculty);

router.get('/:facultyId', facultyController.getFacultyById);

router.put('/:facultyId', facultyController.updateFaculty);

router.delete('/:facultyId', facultyController.deleteFaculty);

module.exports = router;