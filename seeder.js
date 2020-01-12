const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './backend/config/config.env' });

// Load models
const Book = require('./backend/models/Book');
const Author = require('./backend/models/Author');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Read JSON files
const books = JSON.parse(
  fs.readFileSync(`${__dirname}/backend/_data/books.json`, 'utf-8')
);

const authors = JSON.parse(
  fs.readFileSync(`${__dirname}/backend/_data/authors.json`, 'utf-8')
);

// Delete and import data into DB
const deleteAndImportDATA = async () => {
  try {
    await Book.deleteMany({});
    await Author.deleteMany({});
    console.log('Data Destroyed');
    await Book.create(books);
    await Author.create(authors);
    console.log('Data Imported');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};


deleteAndImportDATA();


