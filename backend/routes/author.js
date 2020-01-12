const router = require('express').Router();
const { getAuthors, getAuthor, updateAuthor, deleteAuthor, createAuthor } = require('../controllers/author');

router.route('/authors')
  .get(getAuthors);

router.route('/author/:id')
  .get(getAuthor)
  .put(updateAuthor)
  .delete(deleteAuthor);

router.route('/author')
  .post(createAuthor);

module.exports = router;
