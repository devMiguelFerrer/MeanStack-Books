const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 1
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 1
  }
});

AuthorSchema.pre('remove', async function (next) {
  await this.model('Book').deleteMany({ author: this._id });
  next();
});


module.exports = mongoose.model('Author', AuthorSchema);