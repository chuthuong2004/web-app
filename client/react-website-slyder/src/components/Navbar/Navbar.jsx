import React, {useState} from 'react'
import { FaSearch,FaCartPlus } from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai'
import {VscChromeClose} from 'react-icons/vsc'
import logo from '../Images/logo.png'
import {Nav, ResponsiveNav} from './Navbar.elements';
import { NavLink } from 'react-router-dom';
import { data } from './Data';
import { useSelector } from 'react-redux';

export default function Navbar() {

  const user = useSelector((state) => state.auth.login.currentUser)

  const [navbarState, setNavbarState] = useState(false);

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
          <i className='FaCartPlus'><FaCartPlus /></i>
        </div>

        {user? (
          <>
            <p className='navbar-user'>Hi, <span>{user.currentUser}</span></p>
            <NavLink to="/SignIn">Log out</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/SignUp">Sign Up</NavLink>
            <NavLink to="/SignIn">Sign In</NavLink>
          </>
        )}
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
          <button><NavLink to="/SignUp" onClick={() => setNavbarState(false)}>Sign Up</NavLink></button>
        </ul>
      </ResponsiveNav>
    </>
  )
}
