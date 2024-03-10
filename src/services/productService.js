import productsApi from "../apis/productsApi";

const BASE_URL = '';

export const getProducts = async () => {

    const response = await fetch(BASE_URL);
    const products = response.json();

    return products;
}

export const calculateTotal = (items) => {
    return items.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, 0);
}


//  Peticiones Axios

export const findAll = async () => {
    try {
        const response = await productsApi.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const findAllPages = async (page = 0) => {
    try {
        const response = await productsApi.get(`${BASE_URL}/page/${page}`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const save = async ({ name, description, price }) => {
    try {
        return await productsApi.post(BASE_URL, {
            name,
            description,
            price
        });
    } catch (error) {
        throw error;
    }
    return undefined;
}

export const update = async ({ id, name, description, price }) => {
    try {
        return await productsApi.put(`${BASE_URL}/${id}`, {
            name,
            description,
            price
        });
    } catch (error) {
        throw error;
    }
}

export const remove = async (id) => {
    try {
        await productsApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}