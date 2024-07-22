// src/components/PostDeleteModal.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../features/blogSlice';
import './PostDeleteModal.css';

/**
 * Modal component to confirm post deletion.
 * @param {Object} props - Component properties.
 * @param {string} props.postId - ID of the post to delete.
 * @param {Function} props.onClose - Callback to close the modal.
 */
const PostDeleteModal = ({ postId, onClose }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deletePost(postId));
    onClose(); // Close the modal after deletion
  };

  return (
    <div className="delete-modal">
      <p>Are you sure you want to delete this post?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default PostDeleteModal;
