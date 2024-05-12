import axios from "axios";

const loginUser = async ({username, password}) => {
    try {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, {
            username,
            password
        })
    } catch (error) {
        throw error;
    }
}

const registerUser = async ({username, email, password}) => {
    try {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users`, {
            username,
            email,
            password
        })
    } catch (error) {
        throw error;
    }
}

export {
    loginUser,
    registerUser
}