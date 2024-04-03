import axios from "axios";
import { BASE_URL } from "../constants";
import image from "../assets/images/homepage.png";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default instance;

// http://localhost:8000
