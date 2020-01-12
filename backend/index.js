const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('../backend/middlewares/errorHandler');
const cors = require('cors');

const app = express();

// Load env vars
dotenv.config({ path: './backend/config/config.env' });

//  CORS
app.use(cors());

//  Connect to DB
connectDB();

//  Load routes
const book = require('./routes/book');
const author = require('./routes/author');

// Body parser
app.use(express.json());

//  Mount routes
app.use('/api', book);
app.use('/api', author);

//  Error handler
app.use(errorHandler);

module.exports = app;