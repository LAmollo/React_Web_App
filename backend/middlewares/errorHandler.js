// backend/middlewares/errorHandler.js

/**
 * Centralized error handler middleware for the backend.
 * Logs the error and sends a response with a 500 status code.
 */
module.exports = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({ error: err.message }); // Respond with error message
  };
  