import axios from "axios";

const api = axios.create({
  baseURL: "http://172.22.240.1:8080"
})

export default api;