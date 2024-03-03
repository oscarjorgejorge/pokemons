import Config from "@/config";
import axios from "axios";

axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.baseURL = Config.apiurl;

const Http = axios;

export default Http;
