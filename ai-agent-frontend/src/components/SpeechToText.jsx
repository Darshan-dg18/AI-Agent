import React, { useState, useRef } from "react";
import "../styles/Generator.css";

const SpeechToText = () => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser!");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true; // show real-time words while speaking
    recognition.continuous = true; // keep listening until stopped

    recognition.onstart = () => {
      setListening(true);
      setText(""); // clear previous text
    };

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + " ";
      }
      setText(transcript.trim());
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert("Error: " + event.error);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  return (
    <div className="generator-container">
      <h2>🎤 Speech to Text</h2>
      <p>Speak into the microphone and see your words appear below:</p>

      <div className="btn-row">
        {!listening ? (
          <button onClick={startListening}>🎙️ Start Speaking</button>
        ) : (
          <button onClick={stopListening}>🛑 Stop</button>
        )}
      </div>

      <div className="output">
        {text ? (
          <p>{text}</p>
        ) : (
          <p className="placeholder">Your speech will appear here...</p>
        )}
      </div>
    </div>
  );
};

export default SpeechToText;
