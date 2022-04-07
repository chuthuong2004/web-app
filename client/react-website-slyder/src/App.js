import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import Services from './components/Services/Services'
import Recommend from './components/Recommend/Recommend'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Testimonail from './components/Testimonail/Testimonail'
import Footer from '../src/components/Footer/Footer'
import scrollreveal from "scrollreveal";
import Blog from './components/Blog/Blog'
import Evaluate from './components/Evaluate/Evaluate'
import GlobalStyle from './globalStyles'

//Pages
import SignUp from './Pages/SignupPage'
import About from "./Pages/AboutPages"



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
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Background />
      <Services />
      <Recommend />
      <ScrollToTop />
      <Testimonail />
      <Blog />
      <Evaluate />
      <Footer />
    </Router>
  )
}

export default App
