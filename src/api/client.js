import axios from "axios";
import { SPRING_URL } from "./url";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`; // spring
client.defaults.withCredentials = true;

const token = localStorage.getItem("mangotoken"); // access token
console.log("현재 토큰", token);

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

console.log(
  "현재 설정된 토큰",
  client.defaults.headers.common["Authorization"],
);

export default client;
