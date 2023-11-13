import axios from "axios";
import Cookies from "js-cookie";


const token = Cookies.get('token');

const axiosAdmin = axios.create({
    baseURL:'http://localhost:8080/admin/',
    headers:{
        
        'Content-Type': 'application/json',
    },
});

// Interceptors
// Add a request interceptor
axiosAdmin.interceptors.request.use(
    // Do something before request is sent
    (config) => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosAdmin.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export default axiosAdmin;