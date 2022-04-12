import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import userReducer from "./userSlider"

export default configureStore({
    reducer: {
        auth: authReducer,

        users: userReducer
    }
})
