import axios from "axios";
import { BASE_URL } from "../constants";
import { getToken } from "./session";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { access_token: getToken("access_token") },
});

export default instance;

// http://localhost:8000
