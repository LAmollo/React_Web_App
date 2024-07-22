import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from '../features/blogSlice';
import './PostForm.css';

const PostForm = ({ currentPost, onClose }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
      setBody(currentPost.body);
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPost) {
      dispatch(updatePost({ id: currentPost.id, title, body }));
    } else {
      dispatch(addPost({ title, body }));
    }
    onClose();
  };

  return (
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit">{currentPost ? 'Update' : 'Add'} Post</button>
      </form>
    </div>
  );
};

export default PostForm;
sudo 