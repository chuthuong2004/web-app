import { loginFailed, loginStart, loginSuccess, signupFailed, signupStart, signupSuccess } from "./../components/Form/FormSign/Redux/authSlice";
import axiosClient from "./axiosClient";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axiosClient.post(("/v1/auth/login"), user)
        dispatch(loginSuccess(res.data))
        navigate("/")
    } catch (err) {
        dispatch(loginFailed())
    }
}

export const signupUser = async (user, dispatch, navigate) => {
    dispatch(signupStart())
    try {
        await axiosClient.post(("/v1/auth/register"), user)
        dispatch(signupSuccess())
        navigate("/SignUp")
    } catch (err) {
        dispatch(signupFailed())
    }
}