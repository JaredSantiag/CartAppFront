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
        saveAddress: (state, { payload }) => {
            if(payload.id>1){
                const index = state.user.addresses.findIndex(address => address.id === payload.id);
                state.user.addresses[index] = { ...payload }
            }else{
                state.user.addresses = [
                    ... state.user.addresses,
                    {
                        ...action.payload       
                    }
                ];
            }
        },
        deleteAddress: (state, { payload }) => {
            state.user.addresses = state.user.addresses.filter(address => address.id !== payload);
        },
        deletePaymentMethod: (state, { payload }) => {
            state.user.paymentMethods = state.user.paymentMethods.filter(paymentMethod => paymentMethod.id !== payload);
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
            state.visibleModalAddress = true;
        },
        closeModalAddress: (state) => {
            state.visibleModalAddress = false;
        }
    }
});

export const {
    loadingUser,
    saveAddress,
    deleteAddress,
    deletePaymentMethod,
    showPayments,
    hidePayments,
    visibleModalPassword,
    visibleModalAddress,
    openModalPassword,
    closeModalPassword,
    openModalAddress,
    closeModalAddress
} = userSlice.actions