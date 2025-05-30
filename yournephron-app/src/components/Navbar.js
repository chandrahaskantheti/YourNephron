import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/events">Events and Join Us</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
      </ul>
    </nav>
  );
}