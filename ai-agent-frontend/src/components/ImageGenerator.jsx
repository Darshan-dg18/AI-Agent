import React, { useState } from "react";
import { generateImage } from "../service/apiService";
import Loader from "./Loader";
import "../styles/Generator.css";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return alert("Please enter a prompt");
    setLoading(true);
    try {
      const data = await generateImage(prompt);
      setImageUrl(data);
    } catch (error) {
      alert("Error generating image!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="generator-container">
      <h2>🎨 AI Image Generator</h2>
      <input
        type="text"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>
      {loading && <Loader />}
      {imageUrl && (
        <div className="output">
          <h4>Generated Image:</h4>
          <img src={imageUrl} alt="AI Generated" />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
