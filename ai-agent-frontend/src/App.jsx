import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TextPage from "./pages/TextPage";
import ImagePage from "./pages/ImagePage";
import SpeakPage from "./pages/SpeakPage";
SpeakPage;
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/text" element={<TextPage />} />
          <Route path="/image" element={<ImagePage />} />
          <Route path="/speech" element={<SpeakPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
