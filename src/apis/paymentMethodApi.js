import axios from "axios";

const paymentMethodApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/paymentmethods`
});

paymentMethodApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
});

export default paymentMethodApi;
