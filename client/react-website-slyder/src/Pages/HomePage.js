import React, { useEffect } from 'react'
import Background from "../components/Background/Background"
import Services from '../components/Services/Services'
import Recommend from '../components/Recommend/Recommend'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Testimonail from '../components/Testimonail/Testimonail'
import Blog from '../components/Blog/Blog'
import scrollreveal from 'scrollreveal'
import Evaluate from '../components/Evaluate/Evaluate'
import { useSelector, useDispatch } from "react-redux"
import { getAllUsers } from "../api/apiRequest"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import jwt_Decode from 'jwt-decode'
import { refreshToken } from '../components/Form/FormSign/Redux/createInstance'
import { loginSuccess } from '../components/Form/FormSign/Redux/authSlice'

function Home() {

    const user = useSelector((state) => state.auth.login?.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let axiosJWT = axios.create()
    // const msg = useSelector((state) => state.users?.msg)
    const userList = useSelector((state) => state.users.users?.allUsers)

    useEffect(() => {
        if (!user) {
            navigate("/SignUp")
        } if (user?.accessToken) {
            getAllUsers(user?.accessToken, dispatch)
        }
    })

    axiosJWT.interceptors.request.use(
        async (config) => {
            let date = new Date()
            const decodedToken = jwt_Decode(user?.accessToken)
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken();
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken,
                };
                dispatch(loginSuccess(refreshUser))
                config.headers["token"] = "Bearer" + data.accessToken
            }
            return config
        },
        (err) => {
            return Promise.reject(err)
        }
    )

    useEffect(() => {
        const sr = scrollreveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: true,
        });
        sr.reveal(
            `
            nav,
            #hero,
            #services,
            #recommend,
            #testimonials,
            footer
            `,
            {
                opacity: 0,
                interval: 300,
            }
        );
    }, []);

    console.log(userList)
    return (
        <>
            <Background />
            <Services />
            <Recommend />
            <ScrollToTop />
            <Testimonail />
            <Blog />
            <Evaluate />
        </>
    )
}

export default Home
