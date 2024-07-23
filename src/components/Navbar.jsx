import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="logo">Movies</h1>
      </Link>
      <Link to="/favorites">
        <h1 className="favorites">Favorites</h1>
      </Link>
    </nav>
  );
}
