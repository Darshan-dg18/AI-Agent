import axios from "axios";

const API_BASE_URL = "enthusiastic-courage-production-c66a.up.railway.app";

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
