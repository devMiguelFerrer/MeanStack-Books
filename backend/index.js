const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();

// Load env vars
dotenv.config({ path: './backend/config/config.env' });

//  Connect to DB
connectDB();

//  Load routes
const book = require('./routes/book');
const author = require('./routes/author');

// Body parser
app.use(express.json());

//  Mount routes
app.use(book);
app.use(author);

module.exports = app;