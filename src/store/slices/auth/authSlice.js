import { createSlice } from "@reduxjs/toolkit";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
    isLoginLoading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialLogin,
    reducers: {
        onLogin: (state, action) => {
            state.isAuth = true;
            state.isAdmin = action.payload.isAdmin;
            state.user = action.payload.user;
            state.isLoginLoading = false;
        },
        onLogout: (state, action) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = undefined;
            state.isLoginLoading = false;
        },
        onInitLogin: (state) => {
            state.isLoginLoading = true
        },
        onRegister: (state, action) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = action.payload.user;
            state.isLoginLoading = false;
        }
    }
});

export const { onLogin, onLogout, onInitLogin, onRegister} = authSlice.actions;