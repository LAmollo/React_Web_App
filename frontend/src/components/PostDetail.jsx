// frontend/src/components/PostDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from '../services/axiosInstance';

const PostDetail = () => {
  const { postId } = useParams();
  const history = useHistory();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/posts/${postId}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post details:', error);
      });
  }, [postId]);

  const handleDelete = () => {
    axios.delete(`/posts/${postId}`)
      .then(() => {
        console.log('Post deleted successfully');
        history.push('/posts'); // Redirect to posts list or homepage
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

export default PostDetail;
