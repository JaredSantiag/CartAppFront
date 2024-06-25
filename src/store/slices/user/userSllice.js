import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",

    initialState: {
        user: {},
        isLoading: true,
        visiblePaymentMethods: false
    },

    reducers: {
        loadingUser: (state, {payload}) => {
            state.user = payload;
            state.isLoading = false;
        },
        showPayments: (state) => {
            state.visiblePaymentMethods = true;
        },
        hiddePayments: (state) => {
            state.visiblePaymentMethods = false;
        }
    }
});

export const {
    loadingUser,
    showPayments,
    hiddePayments
} = userSlice.actions