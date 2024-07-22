// backend/routes/posts.js

const express = require('express');
const router = express.Router();
const Post = require('./models/Post');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();  // Fetch all posts from the database
    res.json(posts);                  // Respond with the posts
  } catch (err) {
    res.status(500).json({ error: err.message }); // Error handling
  }
});

// POST a new post
router.post('/', async (req, res) => {
  try {
    const post = new Post(req.body); // Create a new post with request data
    await post.save();               // Save the post to the database
    res.json(post);                 // Respond with the created post
  } catch (err) {
    res.status(500).json({ error: err.message }); // Error handling
  }
});

// PUT (update) a post by ID
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update the post
    if (!post) {
      return res.status(404).json({ error: 'Post not found' }); // Handle case where post is not found
    }
    res.json(post); // Respond with the updated post
  } catch (err) {
    res.status(500).json({ error: err.message }); // Error handling
  }
});

// DELETE a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const result = await Post.findByIdAndDelete(req.params.id); // Delete the post
    if (!result) {
      return res.status(404).json({ error: 'Post not found' }); // Handle case where post is not found
    }
    res.json({ message: 'Post deleted' }); // Respond with success message
  } catch (err) {
    res.status(500).json({ error: err.message }); // Error handling
  }
});

module.exports = router;
