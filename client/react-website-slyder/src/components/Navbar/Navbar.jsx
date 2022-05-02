import React, {useState, useEffect} from 'react'
import { FaSearch,FaCartPlus, FaCaretDown } from 'react-icons/fa';
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
  const [navSize, setnavSize] = useState("84px")
  const [navWidth, setnavWidth] = useState("100%")
  const [navColor, setnavColor] = useState("#fff")

  const listenScrollEvent = () => {
    window.screenY > 10 ? setnavColor("#fff") : setnavColor("#fff")
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("84px");
    window.scrollY > 10 ? setnavWidth("100%") : setnavWidth("100%");
  }

useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
        window.removeEventListener("scroll", listenScrollEvent);
    };
}, []);

  const handleLogout = () => {
    logoutUsers(dispastch,id,navigate,accessToken,axiosJWT);
  }

  return (
    <>
      <Nav style={{
          backgroundColor: navColor,
          width: navWidth,
          height: navSize,
          transition: "all 1s"
        }}>
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
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/">Shop<FaCaretDown /></NavLink>
              <ul className='subnav'>
                <li><NavLink to="/">T-Shirt</NavLink>
                  <ul className='nav_subnav'>
                    <li><NavLink to="/">Tay dai</NavLink></li>
                    <li><NavLink to="/">Tay ngan</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/">Bottom</NavLink>
                  <ul className='nav_subnav-short'>
                      <li><NavLink to="/">Long</NavLink></li>
                      <li><NavLink to="/">Short</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/">Hoodie</NavLink></li>
              </ul>
          </li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <div className='IconNavbar'>
          {user? (
            <>
              <div className='button-logout'>
                <NavLink to="#" className="subnav_Link">
                  <i className='Icon-user'><img src={user.avatar} /> <span>{user.username}</span>
                    <ol className='subnav-icon'>
                      <NavLink to="/InfoAcc"><li>Đổi mật khẩu</li></NavLink>
                      <NavLink to="/cart" ><li>Đơn hàng của tôi</li></NavLink>
                      <NavLink to="#" onClick={handleLogout}><li >Đăng xuất</li></NavLink>
                    </ol>
                  </i>
                </NavLink>
                <Link to='/cart'><i className='FaCartPlus'><FaCartPlus /></i></Link>
              </div>
            </>
            ) : (
              <>
              <div className='button-log'>
                <NavLink className="signup" to="/SignUp">Sign Up</NavLink>
              </div>
            </>
          )}
          <i className='Fasearch' id='search-js'><FaSearch /></i>
          
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
