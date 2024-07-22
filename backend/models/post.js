// backend/models/Post.js

const mongoose = require('mongoose');

/**
 * Define the schema for blog posts.
 */
const postSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Title of the post
  body: { type: String, required: true }   // Body content of the post
});

// Create and export the Post model based on the schema
module.exports = mongoose.model('Post', postSchema);
