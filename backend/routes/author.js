const router = require('express').Router();
const { getAuthors, getAuthor, updateAuthor, deleteAuthor } = require('../controllers/author');

router.route('/authors')
  .get(getAuthors);

router.route('/author/:id')
  .get(getAuthor)
  .put(updateAuthor)
  .delete(deleteAuthor);

module.exports = router;
