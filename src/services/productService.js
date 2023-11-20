import axios from "axios";

const BASE_URL = 'http://localhost:8080/products';

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
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const save = async ({ name, description, price }) => {
    try {
        return await axios.post(BASE_URL, {
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
        return await axios.put(`${BASE_URL}/${id}`, {
            name,
            description,
            price
        });
    } catch (error) {
        throw error;
    }
    return undefined;
}

export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}