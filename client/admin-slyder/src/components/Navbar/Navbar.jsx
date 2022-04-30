import React, {useContext} from 'react'
import logo from '../Images/logo.png'
import {Nav} from './Navbar.elements';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUsers } from '../../api/apiRequest';
import Home from '../../Pages/HomePage';
import { DarkModeContext } from '../Context/darkModeContext';
import { createAxios } from '../Form/FormSign/Redux/createInstance';
import { logoutSuccess } from '../Form/FormSign/Redux/authSlice';

export default function Navbar() {

  const user = useSelector((state) => state.auth.login?.currentUser)
  const accessToken = user?.accessToken
  const id = user?._id
  const dispastch = useDispatch()
  const navigate = useNavigate()
  let axiosJWT = createAxios(user, dispastch, logoutSuccess )

  const handleLogout = () => {
    logoutUsers(dispastch,id,navigate,accessToken,axiosJWT);
  }

  const { dispatch } = useContext(DarkModeContext);

  return (
    <>
      <Nav>
        <div className='brand'>
          <div className='container'>
            <NavLink to={<Home />}><img src = {logo} alt = "logo"/></NavLink>
          </div>
        </div>

        <div className='IconNavbar'>
          {user? (
            <>
              <div className="navbar">
                <div className="wrapper">
                  <div className="items">
                    <div className="item">
                      <LanguageOutlinedIcon className="icon" />
                      English
                    </div>
                    <div className="item">
                      <DarkModeOutlinedIcon
                        className="icon"
                        onClick={() => dispatch({ type: "TOGGLE" })}
                      />
                    </div>
                    <div className="item">
                      <NotificationsNoneOutlinedIcon className="icon" />
                      <div className="counter">1</div>
                    </div>
                    <div className="item">
                      <ChatBubbleOutlineOutlinedIcon className="icon" />
                      <div className="counter">2</div>
                    </div>
                    <div className="item">
                      <ListOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                      <img
                        src="https://cdn.vectorstock.com/i/1000x1000/40/30/user-glyph-icon-web-and-mobile-admin-sign-vector-18444030.webp"
                        alt=""
                        className="avatar"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='btn-logout'>
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
    </>
  )
}
