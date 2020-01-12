const asyncHandler = require('../middlewares/asyncHandler');
const Book = require('../models/Book');

/**
 * @description Get all book
 * @route GET /api/books
 * @access Public
 */
exports.getBooks = asyncHandler(async (req, res, next) => {
  const books = await Book.find().populate({
    path: 'author',
    select: 'firstName lastName'
  });

  return res.json({
    success: true,
    controller: 'getBooks',
    data: books
  });
});

/**
 * @description Create a book
 * @route POST /api/books
 * @access Public
 */
exports.createBook = asyncHandler(async (req, res, next) => {
  const book = await Book.create(req.body);

  return res.json({
    success: true,
    controller: 'createBook',
    data: book
  });
});

/**
 * @description Get a book
 * @route GET /api/book/:id
 * @access Public
 */
exports.getBook = asyncHandler(async (req, res, next) => {
  const respGetBook = await Book.findById(req.params.id).populate({
    path: 'author',
    select: 'firstName lastName'
  });

  return res.json({
    success: true,
    controller: 'getBook',
    id: req.params.id,
    data: respGetBook
  });
});

/**
 * @description Update a book
 * @route PUT /api/book/:id
 * @access Public
 */
exports.updateBook = asyncHandler(async (req, res, next) => {
  let respUpdateBook = await Book.findById(req.params.id);

  if (!respUpdateBook) {
    return res.json({
      success: false,
      controller: 'updateBook',
      id: req.params.id,
      message: 'Recurso no encontrado'
    });
  }

  Object.assign(respUpdateBook, req.body);

  respUpdateBook.save();

  return res.json({
    success: true,
    controller: 'updateBook',
    id: req.params.id,
    data: respUpdateBook
  });
});

/**
 * @description Delete a book
 * @route DELETE /api/book/:id
 * @access Public
 */
exports.deleteBook = asyncHandler(async (req, res, next) => {
  const respDeleteBook = await Book.findByIdAndDelete(req.params.id);

  return res.json({
    success: true,
    controller: 'deleteBook',
    id: req.params.id,
    data: respDeleteBook
  });
});