// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar component to provide navigation links.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/posts" className="navbar-link">Posts</Link>
    </nav>
  );
};

export default Navbar;
