// src/components/PostList.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPosts } from '../features/blogSlice';
import PostItem from './PostItem';
import PostForm from './PostForm';
import PostDeleteModal from './PostDeleteModal';
import './PostList.css';

/**
 * Component to list all blog posts with options to add, edit, or delete.
 */
const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [editingPost, setEditingPost] = useState(null);
  const [deletingPostId, setDeletingPostId] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts()); // Fetch posts when component mounts
  }, [dispatch]);

  return (
    <div className="post-list">
      <h1>Blog Posts</h1>
      <PostForm onClose={() => setEditingPost(null)} existingPost={editingPost} />
      {posts.map(post => (
        <PostItem
          key={post._id}
          post={post}
          onEdit={(post) => setEditingPost(post)}
          onDelete={(id) => setDeletingPostId(id)}
        />
      ))}
      {deletingPostId && (
        <PostDeleteModal
          postId={deletingPostId}
          onClose={() => setDeletingPostId(null)}
        />
      )}
    </div>
  );
};

export default PostList;
