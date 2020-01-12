const errorHandler = (err, req, res, next) => {
  return res.json({
    success: false,
    err
  });
}

module.exports = errorHandler;