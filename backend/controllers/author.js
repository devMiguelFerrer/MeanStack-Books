const asyncHandler = require('../middlewares/asyncHandler');

exports.getAuthors = asyncHandler(async (req, res, next) => {
  return res.json({
    success: true,
    controller: 'getAuthors'
  });
});

exports.getAuthor = asyncHandler(async (req, res, next) => {
  return res.json({
    success: true,
    controller: 'getAuthor'
  });
});

exports.updateAuthor = asyncHandler(async (req, res, next) => {
  return res.json({
    success: true,
    controller: 'updateAuthor'
  });
});

exports.deleteAuthor = asyncHandler(async (req, res, next) => {
  return res.json({
    success: true,
    controller: 'deleteAuthor'
  });
});