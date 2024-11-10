import axios from "axios";


const BASE_URL = "https://ec2-18-222-167-54.us-east-2.compute.amazonaws.com:4003/api" 

const axiosInstance=axios.create({
    baseURL:BASE_URL,
});

export default axiosInstance;   