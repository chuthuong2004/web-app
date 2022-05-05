import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess, signupFailed, signupStart, signupSuccess } from "./../components/Form/FormSign/Redux/authSlice";
import axios from "axios";
import { deleteUsersFailse, deleteUsersStart, deleteUsersSuccess, getUsersFailse, getUsersStart, getUsersSuccess } from "../components/Form/FormSign/Redux/userSlider";
import { getProductsFailse, getProductsStart, getProductsSuccess } from "../components/Form/FormSign/Redux/productSlider";
import { getOrdersSuccess, getOrdersStart, getOrdersFailse } from "../components/Form/FormSign/Redux/orderSlider"
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

export const DeleteUser = async (accessToken, dispatch, id, axiosJWT) => {
    dispatch(deleteUsersStart());
    try {
        const res = await axiosJWT.delete('https://web-api-chuthuong.herokuapp.com/api/v1/admin/user/:id' + id, {
            headers: { token: `Bearer ${accessToken}` }
        })
        dispatch(deleteUsersSuccess(res.data))
    } catch (err) {
        dispatch(deleteUsersFailse(err.response.data))
    }
}

export const getAllProducts = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getProductsStart())
    try {
        const res = await axiosJWT.get(("https://web-api-chuthuong.herokuapp.com/api/v1/admin/products"), {
            headers: { token: `Bearer ${accessToken}` }
        })
        console.log("pro" + res)
        dispatch(getProductsSuccess(res.data))

    } catch (err) {
        dispatch(getProductsFailse())
    }
}

export const getAllOrders = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getOrdersStart())
    try {
        const res = await axiosJWT.get(("https://web-api-chuthuong.herokuapp.com/api/v1/admin/orders"), {
            headers: { token: `Bearer ${accessToken}` }
        })
        console.log("pro" + res)
        dispatch(getOrdersSuccess(res.data))

    } catch (err) {
        dispatch(getOrdersFailse())
    }
}