import React from 'react'
import { 
  FaSearch,
  FaCartPlus
} from 'react-icons/fa';
import logo from '../Images/logo.png'
import {Nav} from './Navbar.elements';

export default function Navbar() {
  return (
    <>
      <Nav>
        <div className='brand'>
          <div className='container'>
            <img src = {logo} alt = ""/>
          </div>
        </div>

        <ul>
          <li><a href='#home'>Home</a></li>
          <li> <a href='#abouus'>About Us</a></li>
          <li> <a href='#blog'>Blog</a></li>
          <li> <a href='#contact'>Contact</a></li>
          <li> <a href='#contact'>Checking order</a></li>
        </ul>

        <div className='IconNavbar'>
          <i className='Fasearch'><FaSearch /></i>
          <i className='FaCartPlus'><FaCartPlus /></i>
          <button>Sign Up</button>
          </div>
      </Nav>
    </>
  )
}
