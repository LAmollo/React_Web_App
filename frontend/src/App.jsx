import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './features/blogSlice';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <PostList />
      </div>
    </div>
  );
}

export default App;
