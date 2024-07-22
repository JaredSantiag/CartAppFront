import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",

    initialState: {
        user: {},
        address: {},
        paymentMethod: {},
        isLoading: true,
        visiblePaymentMethods: [],
        visibleModalUser: false,
        visibleModalAddress: false,
        visibleModalPayment: false
    },

    reducers: {
        loadingUser: (state, { payload }) => {
            state.user = payload;
            state.isLoading = false;
        },
        saveAddress: (state, { payload }) => {
            if (payload.id > 1) {
                const index = state.user.addresses.findIndex(address => address.id === payload.id);
                state.user.addresses[index] = { ...payload }
            } else {
                state.user.addresses = [
                    ...state.user.addresses,
                    {
                        ...payload
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
        showPayments: (state, { payload }) => {
            state.visiblePaymentMethods.push(payload);
        },
        hidePayments: (state, { payload }) => {
            let visiblePaymentMethodsAux = state.visiblePaymentMethods.slice();
            visiblePaymentMethodsAux = visiblePaymentMethodsAux.filter(p => p !== payload);
            state.visiblePaymentMethods = visiblePaymentMethodsAux;
        },
        openModalUser: (state, action) => {
            state.user = action.payload;
            state.visibleModalUser = true;
        },
        closeModalUser: (state) => {
            state.visibleModalUser = false;
        },
        openModalAddress: (state, action) => {
            state.address = action.payload;
            state.visibleModalAddress = true;
        },
        closeModalAddress: (state) => {
            state.visibleModalAddress = false;
        },
        openModalPayment: (state, action) => {
            state.paymentMethod = action.payload;
            state.visibleModalPayment = true;
        },
        closeModalPayment: (state) => {
            state.visibleModalPayment = false;
        },
    }
});

export const {
    loadingUser,
    saveAddress,
    deleteAddress,
    deletePaymentMethod,
    showPayments,
    hidePayments,
    visibleModalUser,
    visibleModalAddress,
    visibleModalPayment,
    openModalUser,
    closeModalUser,
    openModalAddress,
    closeModalAddress,
    openModalPayment,
    closeModalPayment
} = userSlice.actions