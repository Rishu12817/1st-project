import React from 'react';
import "../style/Header.css";
import { Link } from 'react-router-dom';
function header() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/product">Product</Link>
      </nav>
    </div>
  )
}

export default header;
