import axios from "axios";

const productsApi = axios.create({
    baseURL: 'http://localhost:8080/products'
});

productsApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
});

export default productsApi;
