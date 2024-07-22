// src/components/PostForm.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from '../features/blogSlice';
import './PostForm.css';

/**
 * Form component to create or edit a blog post.
 * @param {Object} props - Component properties.
 * @param {Object} [props.existingPost] - Optional post to edit.
 * @param {Function} props.onClose - Callback to close the form.
 */
const PostForm = ({ existingPost, onClose }) => {
  const [title, setTitle] = useState(existingPost ? existingPost.title : '');
  const [body, setBody] = useState(existingPost ? existingPost.body : '');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, body };
    if (existingPost) {
      await dispatch(updatePost({ id: existingPost._id, ...post }));
    } else {
      await dispatch(addPost(post));
    }
    onClose(); // Close the form after submission
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        required
      />
      <button type="submit">{existingPost ? 'Update' : 'Add'} Post</button>
    </form>
  );
};

export default PostForm;
