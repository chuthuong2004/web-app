import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Recommend from './components/Recommend/Recommend'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Testimonail from './components/Testimonail/Testimonail'
import Footer from '../src/components/Footer/Footer'
import home from '../src/Pages/HomePage/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component = {home}/>
      </Routes>
      <Hero />
      <Services />
      <Recommend />
      <ScrollToTop />
      <Testimonail />
      <Footer />
    </Router>
  )
}

export default App
