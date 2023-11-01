import axios from "axios";

const api = axios.create({
  baseURL: "http://172.29.240.1:8080"
})

export default api;


// import axios from "axios";

// const token = null

// const api = axios.create({
//   baseURL: "http://172.30.208.1:8080",
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Authorization": `Bearer ${token}`
//   }
// })

// export default api;