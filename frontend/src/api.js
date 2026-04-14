import axios from "axios";

const API = axios.create({
  baseURL: "https://auth-rbac-project.onrender.com/api"
});

export default API;