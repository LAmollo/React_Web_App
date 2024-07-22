// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostDetail from './components/PostDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/posts">
            <PostList />
          </Route>
          <Route exact path="/posts/create">
            <PostCreate />
          </Route>
          <Route path="/posts/:postId">
            <PostDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

