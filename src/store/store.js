import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/products/productsSlice";
import { authSlice } from "./slices/auth/authSlice";
import { ordersSlice } from "./slices/orders/ordersSlice";
import { userSlice } from "./slices/user/userSllice";

export const store = configureStore({
    reducer: {
        orders: ordersSlice.reducer,
        products: productsSlice.reducer,
        user: userSlice.reducer,
        auth: authSlice.reducer
    }
})