import axios from "axios";

const api = axios.create({
  baseURL: "http://172.17.32.1:8080",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
})

export default api;