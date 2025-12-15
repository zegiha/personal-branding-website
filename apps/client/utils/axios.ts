import defaultAxios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const axios = defaultAxios.create({
  baseURL,
  withCredentials: true
})
