import { loginFailed, loginStart, loginSuccess } from "./../components/Form/FormSign/Redux/authSlice";
import axiosClient from "./axiosClient";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axiosClient.get(("/v1/adim/users"))
        console.log(res)
        dispatch(loginSuccess(res.data))
        navigate("/")
    } catch (err) {
        dispatch(loginFailed())
    }
}