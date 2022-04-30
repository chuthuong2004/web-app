import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        },

        signup: {
            currentUser: false,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },

        signupStart: (state) => {
            state.signup.isFetching = true;
        },
        signupSuccess: (state) => {
            state.signup.isFetching = false;
            state.signup.error = false;
            alert("Đã đang kí thành công")
            state.signup.success = true;
        },
        signupFailed: (state) => {
            state.signup.isFetching = false;
            state.signup.error = true;
            state.signup.success = false;
        },

        logoutStart: (state) => {
            state.login.isFetching = true;
        },
        logoutSuccess: (state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = false;
        },
        logoutFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        }
    }
})



export const {
    loginStart,
    loginFailed,
    loginSuccess,
    signupStart,
    signupFailed,
    signupSuccess,
    logoutStart,
    logoutSuccess,
    logoutFailed,
} = authSlice.actions;

export default authSlice.reducer;