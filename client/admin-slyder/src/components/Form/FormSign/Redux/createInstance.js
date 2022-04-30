import axios from "axios";
import jwt_decode from "jwt-decode"

const refreshToken = async (refreshToken) => {
    try {
        console.log("refreshToken", refreshToken)
        const res = await axios.post("https://web-api-chuthuong.herokuapp.com/api/v1/auth/refresh", { refreshToken });
        console.log("data khi refreshToken" + res.data)
        document.cookie = 'refreshToken=' + res.data.refreshToken
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export const createAxios = (user, dispatch, stateSuccess) => {
    const newInstance = axios.create()

    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date()
            var refToken = document.cookie.split('=')[1]
            const decodedToken = jwt_decode(user?.accessToken)
            if (decodedToken.exp < date.getTime() / 1000) {
                console.log('refToken' + refToken)
                const data = await refreshToken(refToken)
                console.log('accsessToken khi refToken' + data.accessToken)
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken
                }
                dispatch(stateSuccess(refreshUser))
                config.headers["token"] = 'Bearer' + data.accessToken
            }
            return config
        },
        (err) => {
            return Promise.reject(err)
        }
    )
    return newInstance
}