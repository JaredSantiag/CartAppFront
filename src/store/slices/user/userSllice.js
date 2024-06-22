import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",

    initialState: {
        user: {},
        isLoading: true
    },

    reducers: {
        loadingUser: (state, {payload}) => {
            state.user = payload;
            state.isLoading = false;
        }
    }
});

export const {
    loadingUser
} = userSlice.actions