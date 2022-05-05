import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: {
            allOrders: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getOrdersStart: (state) => {
            state.orders.isFetching = true;
        },
        getOrdersSuccess: (state, action) => {
            state.orders.isFetching = false
            state.orders.allOrders = action.payload
        },
        getOrdersFailse: (state) => {
            state.orders.isFetching = false;
            state.orders.error = true
        },
    }
})

export const {
    getOrdersStart,
    getOrdersFailse,
    getOrdersSuccess
} = orderSlice.actions

export default orderSlice.reducer