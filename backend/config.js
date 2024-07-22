// backend/config.js

/**
 * Configuration settings for the backend.
 */
module.exports = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/blog', // MongoDB URI
    port: process.env.PORT || 5000,  // Port for the server
    apiKey: process.env.API_KEY      // API key for external API
  };
  