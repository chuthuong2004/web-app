import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'
import scrollreveal from "scrollreveal";
import GlobalStyle from './globalStyles'

//Pages
import SignUp from './Pages/SignupPage'
import About from "./Pages/AboutPages"
import Home from "./Pages/HomePage"
import Blog from './components/Blog/Blog';



function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/About' element={<About />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
