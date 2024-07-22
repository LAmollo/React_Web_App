import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../features/blogSlice';
import PostDeleteModal from './PostDeleteModal';
import './PostItem.css';

const PostItem = ({ post, onEdit }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => onEdit(post)}>Edit</button>
      <button onClick={() => setShowDeleteModal(true)}>Delete</button>
      {showDeleteModal && (
        <PostDeleteModal
          post={post}
          onDelete={handleDelete}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default PostItem;
