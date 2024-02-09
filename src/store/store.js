import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/products/productsSlice";
import { authSlice } from "./slices/auth/authSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        auth: authSlice.reducer
    }
})