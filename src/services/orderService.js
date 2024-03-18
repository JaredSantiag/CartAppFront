import ordersApi from "../apis/ordersApi";

const BASE_URL = '';

export const findAll = async () => {
    try {
        const response = await ordersApi.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const save = async ( products ) => {
    try {
        return await ordersApi.post(BASE_URL, {
            products
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
    return undefined;
}