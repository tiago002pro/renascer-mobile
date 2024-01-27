import axios from "axios";

const api = axios.create({
  baseURL: "http://100.27.26.62:8080",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
})

export default api;