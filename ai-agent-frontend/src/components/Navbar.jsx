import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      {/* <img src={logo} alt="AI Agent Logo" className="logo" /> */}
      <h3>AI Agent</h3>
    </div>
    <div className="navbar-right">
      <Link to="/">Home</Link>
      <Link to="/text">Ask to AI</Link>
      <Link to="/image">Image Generator</Link>
      <Link to="/speech">Speech to Text</Link>
    </div>
  </nav>
);

export default Navbar;
