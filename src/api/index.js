import axios from "axios";
import Cookies from "js-cookie";
export const BASE_URL = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    headers: {
        "Content-Type": "application/json",

    }
});
export const BASE_URL_ADMIN = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    headers: {
        "Content-Type": "application/json",

    }
})
// lấy về token 
const token = Cookies.get("token");

const addAuthToken = (instance) => {
    instance.interceptors.request.use((config) => {
        console.log("token", token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    })
}

// muốn ap dung cho instance nào thì 
addAuthToken(BASE_URL_ADMIN);
