import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/auth",
});

export const loginUser = async (data) => {
  const response = await API.post("/login", data);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await API.post("/register", data);
  return response.data;
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};