import axios from "axios";
import "../connect.env";

const API_BASE_URL = import.meta.env.VITE_API_URL;

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
