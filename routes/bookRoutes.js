// routes/bookRoutes.js
const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.delete('/:id', bookController.deleteBook);
router.patch('/:id', bookController.updateBook);
router.get('/page/:page', bookController.getPaginatedBooks);

module.exports = router;