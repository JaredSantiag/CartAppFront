import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",

    initialState: {
        user: {},
        address: {},
        isLoading: true,
        visiblePaymentMethods: [],
        visibleModalPassword: false,
        visibleModalAddress: false
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
        },
        openModalPassword: (state) => {
            state.visibleModalPassword = true;
        },
        closeModalPassword: (state) => {
            state.visibleModalPassword = false;
        },
        openModalAddress: (state, action) => {
            state.address = action.payload;
            state.visibleModalEdit = true;
        },
        closeModalAddress: (state) => {
            state.visibleModalEdit = false;
        }
    }
});

export const {
    loadingUser,
    showPayments,
    hidePayments,
    visibleModalPassword,
    visibleModalAddress,
    openModalPassword,
    closeModalPassword,
    openModalAddress,
    closeModalAddress
} = userSlice.actions