// src/components/PostDetail.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '../features/blogSlice';
import './PostDetail.css';

/**
 * Component to display details of a single post.
 * @param {Object} props - Component properties.
 * @param {string} props.postId - ID of the post to display.
 */
const PostDetail = ({ postId }) => {
  const posts = useSelector(selectPosts);
  const post = posts.find(p => p._id === postId);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
