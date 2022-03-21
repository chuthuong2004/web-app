import React, {useState} from 'react'
import { 
  FaSearch,
  FaCartPlus,
  FaMinus,
  FaMicrosoft 
} from 'react-icons/fa';
import logo from '../Images/logo.png'
import {Nav, ResponsiveNav} from './Navbar.elements';

export default function Navbar() {

  const [navbarState, setNavbarState] = useState(false);

  return (
    <>
      <Nav>
        <div className='brand'>
          <div className='container'>
            <img src = {logo} alt = ""/>
          </div>

          <div className="toggle">
            {navbarState ? (
              <FaMinus onClick={() => setNavbarState(false)} />
            ) : (
              <FaMicrosoft onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li><a href='#home'>Home</a></li>
          <li> <a href='#aboutus'>About Us</a></li>
          <li> <a href='#blog'>Blog</a></li>
          <li> <a href='#contact'>Contact</a></li>
          <li> <a href='#checking'>Checking order</a></li>
        </ul>

        <div className='IconNavbar'>
          <i className='Fasearch'><FaSearch /></i>
          <i className='FaCartPlus'><FaCartPlus /></i>
          <button>Sign Up</button>
        </div>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li><a href="#home" onClick={() => setNavbarState(false)}>Home</a></li>
          <li><a href="#aboutus" onClick={() => setNavbarState(false)}>About Us</a></li>
          <li><a href="#blog" onClick={() => setNavbarState(false)}>Blog</a></li>
          <li><a href="#contact" onClick={() => setNavbarState(false)}>Contact</a></li>
          <li><a href="#checking" onClick={() => setNavbarState(false)}>Checking Order</a></li>
        </ul>
      </ResponsiveNav>
    </>
  )
}
