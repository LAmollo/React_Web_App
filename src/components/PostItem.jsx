// src/components/PostItem.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css';

/**
 * Component to display a single post item.
 * @param {Object} props - Component properties.
 * @param {Object} props.post - Post object.
 * @param {Function} props.onEdit - Callback to trigger edit action.
 * @param {Function} props.onDelete - Callback to trigger delete action.
 */
const PostItem = ({ post, onEdit, onDelete }) => {
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}...</p>
      <Link to={`/posts/${post._id}`} className="post-detail-link">Read more</Link>
      <button onClick={() => onEdit(post)}>Edit</button>
      <button onClick={() => onDelete(post._id)}>Delete</button>
    </div>
  );
};

export default PostItem;
