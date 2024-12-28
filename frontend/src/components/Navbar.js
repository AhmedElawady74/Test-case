import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/add-product">Add Product</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
