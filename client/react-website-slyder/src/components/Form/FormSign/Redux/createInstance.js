import axios from "axios";
import jwt_decode from "jwt-decode"

export const refreshToken = async () => {
    try {
        const res = await axios.post("https://web-api-chuthuong.herokuapp.com/api/v1/auth/refresh", {
            withCredentials: true,
        })
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export const createAxios = (user, dispatch, stataSuccess) => {
    const newInstance = axios.create()

    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const decodedToken = jwt_decode(user?.accessToken)
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken();
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken,
                };
                dispatch(stataSuccess(refreshUser))
                config.headers["token"] = "Bearer" + data.accessToken
            }
            return config
        },
        (err) => {
            return Promise.reject(err)
        }
    )
    return newInstance
}