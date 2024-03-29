import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
    name: "orders",

    initialState: {
        orders: [],
        isLoading: true
    },

    reducers: {
        loadingOrders: (state, {payload}) => {
            state.orders = payload;
            state.isLoading = false;
        },
        addOrder: (state, {payload}) => {
            state.orders = [
                ... state.orders,
                {
                    ...payload       
                }
            ];
        }
    }
});

export const {
    loadingOrders,
    addOrder
} = ordersSlice.actions