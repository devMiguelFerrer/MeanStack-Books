const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 1
  },
  isbn: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 10
  },
  author: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
});


module.exports = mongoose.model('Book', BookSchema);