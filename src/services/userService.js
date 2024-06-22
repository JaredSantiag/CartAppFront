import userApi from "../apis/usersApi";

const BASE_URL = '';

export const find = async () => {
    try {
        const response = await userApi.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}