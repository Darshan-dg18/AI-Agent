import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => (
  <div className="home">
    <h1>Welcome to AI Agent 🤖</h1>
    <p>Generate text and images using Pollinations AI</p>
    <div className="home-buttons">
      <Link to="/text" className="home-button">
        Ask to AI
      </Link>
      <Link to="/image" className="home-button">
        Generate an Image
      </Link>
      <Link to="/speech" className="home-button">
        Speech to Text
      </Link>
    </div>
    {/* Animated Wave Background */}
    <div className="wave-bg">
      <svg
        className="wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,218.7C1120,224,1280,192,1360,176L1440,160L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  </div>
);

export default Home;
