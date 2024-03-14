import ordersApi from "../apis/ordersApi";

const BASE_URL = '';

export const getOrders = async () => {
    try {
        const response = await ordersApi.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}