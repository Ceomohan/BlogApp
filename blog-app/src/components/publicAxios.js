import axios from "axios";

export const publicAxios = axios.create({
  baseURL: "http://localhost:5000",
});

export default publicAxios