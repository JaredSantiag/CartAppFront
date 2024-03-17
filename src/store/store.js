import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/products/productsSlice";
import { authSlice } from "./slices/auth/authSlice";
import { ordersSlice } from "./slices/orders/ordersSlice";

export const store = configureStore({
    reducer: {
        orders: ordersSlice.reducer,
        products: productsSlice.reducer,
        auth: authSlice.reducer
    }
})