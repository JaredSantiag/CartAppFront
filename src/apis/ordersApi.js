import axios from "axios";

const ordersApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/orders`
});

ordersApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
});

export default ordersApi;
