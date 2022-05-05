import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: {
            allProducts: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getProductsStart: (state) => {
            state.products.isFetching = true;
        },
        getProductsSuccess: (state, action) => {
            state.products.isFetching = false
            state.products.allProducts = action.payload
        },
        getProductsFailse: (state) => {
            state.products.isFetching = false;
            state.products.error = true
        },
    }
})

export const {
    getProductsStart,
    getProductsFailse,
    getProductsSuccess
} = productSlice.actions

export default productSlice.reducer