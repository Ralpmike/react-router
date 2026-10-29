import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json",
   },
});


axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});


export default axiosInstance;