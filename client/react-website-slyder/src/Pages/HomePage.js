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
// import { getAllUsers } from "../api/apiRequest"
// import { useNavigate } from 'react-router-dom'
import { createAxios } from '../components/Form/FormSign/Redux/createInstance'
import { loginSuccess } from '../components/Form/FormSign/Redux/authSlice'


function Home() {

    const user = useSelector((state) => state.auth.login?.currentUser)
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const msg = useSelector((state) => state.users?.msg)
    // const userList = useSelector((state) => state.users.users?.allUsers)
    let axiosJWT = createAxios(user, dispatch, loginSuccess)

    // useEffect(() => {
    //     if (!user) {
    //         navigate("/SignUp")
    //     } if (user?.accessToken) {
    //         getAllUsers(user?.accessToken, dispatch, axiosJWT)
    //     }
    // })

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

    console.log(`msg: ${msg}`)
    console.log(`Your rose: ${user?.isAdmin ? 'Admin' : 'User'}`)
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
