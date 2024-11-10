import axios from "axios";


const BASE_URL = "https://user-sentiments.onrender.com/api" 

const axiosInstance=axios.create({
    baseURL:BASE_URL,
});

export default axiosInstance;   