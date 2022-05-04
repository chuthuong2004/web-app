import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartApi from '../../../../api/cartApi'
import { useDispatch, useSelector } from 'react-redux'

export const getMyCart = createAsyncThunk('cart/get', async (params, thunkAPI) => {
    const user = useSelector((state) => state.auth.login.currentUser)
    const accessToken = user?.accessToken
    console.log("AcccetCartToken",accessToken)
    const currentCart = await cartApi.getMyCart(accessToken);
    return currentCart.cart
})

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: {
            cartItem: [],
        },
        status: null
    },
    reducers: {},
    extraReducers: {
        [getMyCart.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getMyCart.fulfilled]: (state, {payload}) => {
            state.cart.cartItem = payload
            state.status = 'success'
            console.log("kkkk",state)
        },
        [getMyCart.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})


export default cartSlice.reducer