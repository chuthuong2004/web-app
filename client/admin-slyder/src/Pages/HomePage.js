import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getAllUsers } from "../api/apiRequest"
import { useNavigate } from 'react-router-dom'
import { createAxios } from '../components/Form/FormSign/Redux/createInstance'
import { loginSuccess } from '../components/Form/FormSign/Redux/authSlice'
import Sidebar from "../components/SiderBar/Sidebar";
import "./home.scss";
import Widget from "../components/Widget/widget";
import Chart from "../components/Chart/chart";
import Featured from "../components/Featured/Featured"
import Table from "../components/Table/table"


function Home() {

    const user = useSelector((state) => state.auth.login?.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let axiosJWT = createAxios(user, dispatch, loginSuccess)

    useEffect(() => {
        if (!user) {
            navigate("/SignUp")
        } if (user?.accessToken) {
            getAllUsers(user?.accessToken, dispatch, axiosJWT)
        }
    })
    return (
        <>
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <div className="widgets">
                        <Widget type="user" />
                        <Widget type="order" />
                        <Widget type="earning" />
                        <Widget type="balance" />
                    </div>
                    <div className="charts">
                        <Featured />
                        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                    </div>
                    <div className="listContainer">
                        <div className="listTitle">Latest Transactions</div>
                        <Table />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
