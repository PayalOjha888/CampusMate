const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.post('/', notesController.addNote);

router.get('/', notesController.getAllNotes);

router.get('/course/:courseId', notesController.getNotesByCourseId);

router.get('/:noteId', notesController.getNoteById);

router.put('/:noteId', notesController.updateNote);

router.delete('/:noteId', notesController.deleteNote);

module.exports = router;