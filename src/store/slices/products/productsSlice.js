import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {
        addPruduct: (state, action) => {
            state.products = [
                ... state.products,
                {
                    ...action.payload       
                }
            ];
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        updatePruduct: (state, action) => {
            state.products.map(p => {
                if(p.id === action.payload.id ){
                    return {
                        ...action.payload
                    };
                }
                return p;
            });
        },
        loadingProducts: (state, action) => {
            state.products = action.payload
        }
    }
});

export const {
    addPruduct,
    removeProduct,
    updatePruduct,
    loadingProducts
} = productsSlice.actions;