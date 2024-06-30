import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",

    initialState: {
        user: {},
        isLoading: true,
        visiblePaymentMethods: []
    },

    reducers: {
        loadingUser: (state, {payload}) => {
            state.user = payload;
            state.isLoading = false;
        },
        showPayments: (state, {payload}) => {
            state.visiblePaymentMethods.push(payload);
        },
        hidePayments: (state, {payload}) => {
            let visiblePaymentMethodsAux = state.visiblePaymentMethods.slice();
            visiblePaymentMethodsAux = visiblePaymentMethodsAux.filter(p => p !== payload);
            state.visiblePaymentMethods = visiblePaymentMethodsAux;
        }
    }
});

export const {
    loadingUser,
    showPayments,
    hidePayments
} = userSlice.actions