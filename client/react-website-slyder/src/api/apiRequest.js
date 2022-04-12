import { loginFailed, loginStart, loginSuccess, signupFailed, signupStart, signupSuccess } from "./../components/Form/FormSign/Redux/authSlice";
import axios from "axios";
import { getUsersFailse, getUsersStart, getUsersSuccess } from "../components/Form/FormSign/Redux/userSlider";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())

    try {
        const res = await axios.post(("https://web-api-chuthuong.herokuapp.com/api/v1/auth/login"), user)
        dispatch(loginSuccess(res.data))
        console.log(res, user)
        navigate("/")
    } catch (err) {
        dispatch(loginFailed())
    }
}

export const signupUser = async (user, dispatch, navigate) => {
    dispatch(signupStart())
    try {
        await axios.post(("https://web-api-chuthuong.herokuapp.com/api/v1/auth/register"), user)
        dispatch(signupSuccess())
        navigate("/SignUp")
    } catch (err) {
        dispatch(signupFailed())
    }
}

export const getAllUsers = async (accsessToken, dispatch) => {
    dispatch(getUsersStart())
    try {
        const res = await axios.get(("https://web-api-chuthuong.herokuapp.com/api/v1/user"), {
            headers: { token: `Bearer ${accsessToken}` }
        })
        dispatch(getUsersSuccess(res.data))
    } catch (err) {
        dispatch(getUsersFailse())
    }
}