import defaultAxios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const axios = defaultAxios.create({
  baseURL, // Replace with your backend URL
  withCredentials: true, // Include cookies in requests
});

export default axios;
