import axios from "axios";

const addressApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/paymentmethods`
});

addressApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
});

export default addressApi;
