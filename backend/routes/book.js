const router = require('express').Router();
const { getBooks, getBook, updateBook, deleteBook, createBook } = require('../controllers/book');

router.route('/books')
  .get(getBooks);

router.route('/book')
  .post(createBook);

router.route('/book/:id')
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook);

module.exports = router;