import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/ai";

// Generate Text
export const generateText = async (prompt) => {
  const response = await axios.get(
    `${API_BASE_URL}/text?prompt=${encodeURIComponent(prompt)}`
  );
  return response.data;
};

// Generate Image
export const generateImage = async (prompt) => {
  const response = await axios.get(
    `${API_BASE_URL}/image?prompt=${encodeURIComponent(prompt)}`
  );
  return response.data;
};
