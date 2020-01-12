const asyncHandler = require('../middlewares/asyncHandler');

exports.getBooks = asyncHandler(async (req, res, next) => {
  return res.json({
    success: true,
    controller: 'getBooks'
  });
});

exports.getBook = asyncHandler(async (req, res, next) => {
  return res.json({
    success: true,
    controller: 'getBook'
  });
});

exports.updateBook = asyncHandler(async (req, res, next) => {
  return res.json({
    success: true,
    controller: 'updateBook'
  });
});

exports.deleteBook = asyncHandler(async (req, res, next) => {
  return res.json({
    success: true,
    controller: 'deleteBook'
  });
}); 