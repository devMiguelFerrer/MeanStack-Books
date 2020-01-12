const asyncHandler = require('../middlewares/asyncHandler');
const Author = require('../models/Author');

/**
 * @description Get all authors
 * @route GET /api/author
 * @access Public
 */
exports.getAuthors = asyncHandler(async (req, res, next) => {
  const authors = await Author.find();

  return res.json({
    success: true,
    controller: 'getAuthors',
    data: authors
  });
});

/**
 * @description Get a author
 * @route GET /api/author/:id
 * @access Public
 */
exports.getAuthor = asyncHandler(async (req, res, next) => {
  const author = await Author.findById(req.params.id);

  return res.json({
    success: true,
    controller: 'getAuthor',
    id: req.params.id,
    data: author
  });
});

/**
 * @description Delete a author
 * @route DELETE /api/author/:id
 * @access Public
 */
exports.deleteAuthor = asyncHandler(async (req, res, next) => {
  const deletedAuthor = await Author.findById(req.params.id);
  await deletedAuthor.remove();

  return res.json({
    success: true,
    controller: 'deleteAuthor',
    id: req.params.id,
    data: deletedAuthor
  });
});

/**
 * @description Update a author
 * @route PUT /api/author/:id
 * @access Public
 */
exports.updateAuthor = asyncHandler(async (req, res, next) => {
  const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {
    new: false,
    runValidators: true
  });
  return res.json({
    success: true,
    controller: 'updateAuthor',
    id: req.params.id,
    data: updatedAuthor
  });
});
