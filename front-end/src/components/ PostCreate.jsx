// frontend/src/components/PostCreate.jsx
import React, { useState } from 'react';
import axios from '../services/axiosInstance';

const PostCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/posts', { title, content })
      .then(response => {
        console.log('Post created successfully:', response.data);
        // Optionally, redirect or update state
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        <label>Content:</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} required></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default PostCreate;
