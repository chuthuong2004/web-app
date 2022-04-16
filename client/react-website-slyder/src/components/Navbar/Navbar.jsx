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

export default function Navbar() {

  const dispastch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.login.currentUser)
  const accessToken = user?.accessToken
  const id = user?._id
  let axiosJWT = createAxios(user, dispastch, logoutSuccess)
  const [navbarState, setNavbarState] = useState(false);
  
  const handleLogout = () => {
    logoutUsers(dispastch, navigate, id, accessToken, axiosJWT);
  }



  return (
    <>
      <Nav>
        <div className='brand'>
          <div className='container'>
            <img src = {logo} alt = "logo"/>
          </div>

          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <AiOutlineMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>
        <ul>
          {data.map((el, index) => {
            return(
              <li key ={index}><NavLink to={el.to}>
                  {el.text}
                </NavLink>
              </li>
            )
          })}
        </ul>

        <div className='IconNavbar'>
          <i className='Fasearch'><FaSearch /></i>
          <Link to='/cart'><i className='FaCartPlus'><FaCartPlus /></i></Link>
          {user? (
            <>
              <div className='button-logout'>
                <i className='Icon-user'><FaUserCircle /></i>
                <NavLink className="signout" to="#" onClick={handleLogout}>Log out</NavLink>
              </div>
            </>
            ) : (
            <>
              <div className='button-log'>
                <NavLink className="signup" to="/SignUp">Sign Up</NavLink>
              </div>
            </>
          )}
        </div>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          {data.map((el, index) => {
              return(
                <li key ={index}><NavLink to={el.to} onClick={() => setNavbarState(false)} >
                    {el.text}
                  </NavLink>
                </li>
              )
          })}
          {user? (
            <>
              <div className='button-logout'>
                <button onClick={handleLogout}><NavLink className="signout" to="/" onClick={() => setNavbarState(false)}>Log out</NavLink></button>
              </div>
            </>
            ) : (
            <>
              <div className='button-log'>
                <button><NavLink className="signup" to="/SignUp" onClick={() => setNavbarState(false)} >Sign Up</NavLink></button>
              </div>
            </>
          )}
        </ul>
      </ResponsiveNav>
    </>
  )
}
