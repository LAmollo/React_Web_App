import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
  const response = await axios.get('http://localhost:5000/api/posts');
  return response.data;
});

export const addPost = createAsyncThunk('blog/addPost', async (newPost) => {
  const response = await axios.post('http://localhost:5000/api/posts', newPost);
  return response.data;
});

export const updatePost = createAsyncThunk('blog/updatePost', async (updatedPost) => {
  const { id } = updatedPost;
  const response = await axios.put(`http://localhost:5000/api/posts/${id}`, updatedPost);
  return response.data;
});

export const deletePost = createAsyncThunk('blog/deletePost', async (postId) => {
  await axios.delete(`http://localhost:5000/api/posts/${postId}`);
  return postId;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post.id === action.payload.id);
        state.posts[index] = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  },
});

export default blogSlice.reducer;
