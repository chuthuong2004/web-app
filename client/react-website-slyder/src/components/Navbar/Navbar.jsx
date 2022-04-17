import React, {useState} from 'react'
import { FaSearch,FaCartPlus, FaUserCircle, FaCaretDown } from 'react-icons/fa';
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
          <li>
            <NavLink to="/">Shop<FaCaretDown />
              <ul className='subnav'>
                <li>
                  <NavLink to="/">Tops
                    <ul className='subnav-two'>
                      <li><NavLink to="/">T-Shirt</NavLink></li>
                      <li><NavLink to="/">Hoodie</NavLink></li>
                    </ul>
                  </NavLink>
                </li>
                <li><NavLink to="/">Botton
                  <ul className='subnav-two'>
                        <li><NavLink to="/">Short</NavLink></li>
                    </ul>
                  </NavLink>
                </li>
                <li><NavLink to="/">Short</NavLink></li>
              </ul>
            </NavLink>
          </li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="">Blog</NavLink></li>
          <li><NavLink to="">Contact</NavLink></li>
          <li><NavLink to="">Checking order</NavLink></li>
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
