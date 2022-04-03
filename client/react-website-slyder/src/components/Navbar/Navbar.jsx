import React, {useState} from 'react'
import { FaSearch,FaCartPlus } from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai'
import {VscChromeClose} from 'react-icons/vsc'
import logo from '../Images/logo.png'
import {Nav, ResponsiveNav} from './Navbar.elements';
import { Link } from 'react-router-dom';
import { data, Sign } from './Data';

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
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <AiOutlineMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>
          
        <ul>
          {data.map((item, index) => {
            return(
              <li key ={index}>
                <a href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>

        <div className='IconNavbar'>
          <i className='Fasearch'><FaSearch /></i>
          <i className='FaCartPlus'><FaCartPlus /></i>
          <button>
            {Sign.map((item) =>{
              return(
                <a href={item.url}>{item.title}</a>
              )
            })}
          </button>
        </div>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li><a href="#home" onClick={() => setNavbarState(false)}>Home</a></li>
          <li><a href="#aboutus" onClick={() => setNavbarState(false)}>About Us</a></li>
          <li><a href="#blog" onClick={() => setNavbarState(false)}>Blog</a></li>
          <li><a href="#contact" onClick={() => setNavbarState(false)}>Contact</a></li>
          <li><a href="#checking" onClick={() => setNavbarState(false)}>Checking Order</a></li>
          <a to="/sign-up" onClick={() => setNavbarState(false)}><button>Sign Up</button></a>
        </ul>
      </ResponsiveNav>
    </>
  )
}
