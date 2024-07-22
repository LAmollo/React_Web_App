// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Define the port number

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.error(err));

// Define the Post model
const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
});
const Post = mongoose.model('Post', PostSchema);

// Fetch data from external API
app.get('/api/movies', async (req, res) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=star+wars`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from external API');
  }
});

// RESTful API routes
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post('/api/posts', async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.json(newPost);
});

app.put('/api/posts/:id', async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPost);
});

app.delete('/api/posts/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.send('Post deleted');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
