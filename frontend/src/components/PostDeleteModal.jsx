import React from 'react';
import './PostDeleteModal.css';

const PostDeleteModal = ({ post, onDelete, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Delete Post</h2>
        <p>Are you sure you want to delete the post titled "{post.title}"?</p>
        <button onClick={onDelete}>Yes, Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PostDeleteModal;
