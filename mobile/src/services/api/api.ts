import axios from "axios";

const api = axios.create({
  baseURL: `https://tis4-prenatal-api.onrender.com`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
