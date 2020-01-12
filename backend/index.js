const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.json({
    message: 'Server on'
  });
});

module.exports = app;