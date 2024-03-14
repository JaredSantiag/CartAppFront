import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
    name: "orders",

    initialState: {
        orders: [],
        isLoading: true
    },

    reducers: {
        loadingOrders: (state, {payload}) => {
            state.products = payload.content;
            state.isLoading = false;
        }
    }
});

export const {
    loadingOrders
} = ordersSlice.actions