const router = require('express').Router();
const { getBooks, getBook, updateBook, deleteBook } = require('../controllers/book');

router.route('/books')
  .get(getBooks);

router.route('/book/:id')
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook);

module.exports = router;