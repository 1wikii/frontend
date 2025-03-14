const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/posts";
import axios from "axios";

export const fetchPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addPost = async (data) => {
  await axios.post(API_URL, data);
};

export const deletePost = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
