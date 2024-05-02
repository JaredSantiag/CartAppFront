import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
    name: "orders",

    initialState: {
        orders: [],
        isLoading: true,
        visibleModal: false
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
        },
        onOpenModal: (state, action) => {
            state.items = action.payload;
            state.visibleModal = true;
        },
        onCloseModal: (state) => {
            state.visibleModal = false;
        }
    }
});

export const {
    loadingOrders,
    addOrder,
    onOpenModal,
    onCloseModal
} = ordersSlice.actions