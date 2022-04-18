import React, {useState} from 'react'
import { FaSearch,FaCartPlus, FaUserCircle } from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai'
import {VscChromeClose} from 'react-icons/vsc'
import logo from '../Images/logo.png'
import {Nav, ResponsiveNav} from './Navbar.elements';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { data } from './Data';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUsers } from '../../api/apiRequest';
import { createAxios } from '../Form/FormSign/Redux/createInstance';
import { logoutSuccess } from '../Form/FormSign/Redux/authSlice';

export default function Navbarsdfsdf() {

  const user = useSelector((state) => state.auth.login.currentUser)
  const accessToken = user?.accessToken
  const id = user?._id
  console.log ("log token accessToken" + user?.accessToken)
  const dispastch = useDispatch()
  const navigate = useNavigate()
  let axiosJWT = createAxios(user, dispastch, logoutSuccess )
  const [navbarState, setNavbarState] = useState(false);
  
  const handleLogout = () => {
    console.log("log acc log" + accessToken)
    logoutUsers(dispastch,id,navigate,accessToken,axiosJWT);
  }}