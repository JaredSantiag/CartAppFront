import userApi from "../apis/usersApi";
import addressApi from "../apis/addressApi";
import paymentMethodApi from "../apis/paymentMethodApi";


const BASE_URL = '';

export const find = async () => {
    try {
        const response = await userApi.get(BASE_URL + "/me");
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const updateUser = async (email, password, phoneNumber, username) => {
    try {
        return await userApi.put(BASE_URL, {
            email,
            password,
            phoneNumber,
            username
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const createAddress = async ({ street, number, suburb, postCode, city, state, country }) => {
    try {
        return await addressApi.post(BASE_URL, {
            street,
            number,
            suburb,
            postCode,
            city,
            state,
            country
        });
    } catch (error) {
        throw error;
    }
}

export const updateAddress = async ({ id, street, number, suburb, postCode, city, state, country }) => {
    try {
        return await addressApi.put(`${BASE_URL}/${id}`, {
            street,
            number,
            suburb,
            postCode,
            city,
            state,
            country
        });
    } catch (error) {
        throw error;
    }
}

export const removeAddress = async (id) => {
    try {
        await addressApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}

export const createPaymentMethod = async ({ id, cardNumber, monthExpiration, yearExpiration, securityCode }) => {
    try {
        return await paymentMethodApi.post(BASE_URL, {
            id, 
            cardNumber, 
            monthExpiration, 
            yearExpiration, 
            securityCode
        });
    } catch (error) {
        throw error;
    }
}

export const removePaymentMethod = async (id) => {
    try {
        await paymentMethodApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}
