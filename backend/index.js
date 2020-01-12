const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();

// Load env vars
dotenv.config({ path: './backend/config/config.env' });

//  Connect to DB
connectDB();

app.get('/', (req, res, next) => {
  res.json({
    message: 'Server on'
  });
});

module.exports = app;