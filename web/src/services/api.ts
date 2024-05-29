import axios from "axios";

const api = axios.create({
  baseURL: `https://tis4-prenatal-api.onrender.com`
});

export default api;
