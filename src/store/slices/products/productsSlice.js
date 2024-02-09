import { createSlice } from "@reduxjs/toolkit";

const initialErrors = {
    name: '',
    description: '',
    price: null
}

export const initialProductForm = {
    id: 0,
    name: '',
    description: '',
    price: 0
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        productSelected: initialProductForm,
        visibleForm: false,
        errors: initialErrors
    },
    reducers: {
        addPruduct: (state, action) => {
            state.products = [
                ... state.products,
                {
                    ...action.payload       
                }
            ];
            state.productSelected = initialProductForm;
            state.visibleForm = false;
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
            state.productSelected = initialProductForm;
            state.visibleForm = false;
        },
        loadingProducts: (state, action) => {
            state.products = action.payload
        },
        onProductSelectForm: (state, action) => {
            state.productSelected = action.payload;
            state.visibleForm = true;
        },
        onOpenForm: (state) => {
            state.visibleForm = true;
        },
        onCloseForm: (state) => {
            state.visibleForm = false;
            state.productSelected = initialProductForm;
        },
        loadingError : (state, {payload}) => {
            state.errors = payload
        }
    }
});

export const {
    addPruduct,
    removeProduct,
    updatePruduct,
    loadingProducts,
    onProductSelectForm,
    onOpenForm,
    onCloseForm,
    loadingError
} = productsSlice.actions;