import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess, signupFailed, signupStart, signupSuccess } from "./../components/Form/FormSign/Redux/authSlice";
import axios from "axios";
import { getUsersFailse, getUsersStart, getUsersSuccess } from "../components/Form/FormSign/Redux/userSlider";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())

    try {
        const res = await axios.post(("https://web-api-chuthuong.herokuapp.com/api/v1/auth/login"), user)
        dispatch(loginSuccess(res.data))
        document.cookie = "refreshToken =" + res.data.refreshToken
        console.log(res, user)
        navigate("/")
        console.log("login tra acc" + res.data.accessToken)
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

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getUsersStart())
    try {
        const res = await axiosJWT.get(("https://web-api-chuthuong.herokuapp.com/api/v1/admin/users"), {
            headers: { token: `Bearer ${accessToken}` }
        })
        dispatch(getUsersSuccess(res.data))

    } catch (err) {
        dispatch(getUsersFailse())
    }
}

export const logoutUsers = async (dispatch, id, navigate, accessToken, axiosJWT) => {
    dispatch(logoutStart())
    try {
        await axiosJWT.post("https://web-api-chuthuong.herokuapp.com/api/v1/auth/logout", id, {
            headers: { token: `Bearer ${accessToken}` }
        })
        document.cookie = "refreshToken=;expires=Thu, 01 Jan 2022 00:00:00 GMT";
        dispatch(logoutSuccess())
        navigate("/SignUp")
    } catch {
        dispatch(logoutFailed())
    }
}