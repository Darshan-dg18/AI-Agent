import React, { useState } from "react";
import { generateText } from "../service/apiService";
import Loader from "./Loader";
import ReactMarkdown from "react-markdown";
import "../styles/Generator.css";

const TextGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return alert("Please enter a prompt");
    setLoading(true);
    try {
      const data = await generateText(prompt);
      setResult(data);
    } catch (error) {
      alert("Error generating text!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="generator-container">
      <h2>🧠 AI Text Generator</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt here..."
      />
      <button onClick={handleGenerate}>Generate</button>
      {loading && <Loader />}
      {result && (
        <div className="output">
          <h4>Response:</h4>
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default TextGenerator;
