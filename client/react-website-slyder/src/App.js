import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'
import GlobalStyle from './globalStyles'

//Pages
import SignUp from './Pages/SignupPage'
import About from "./Pages/AboutPages"
import Home from "./Pages/HomePage"
import Catalog from "./Pages/Catalog"
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import InfoAcc from './Pages/InfoAccountPages';
import Contact from "./Pages/ContactPages"
import BlogPages from "./Pages/BlogPages"
import Checkking from './Pages/CheckkingForm';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blog' element={<BlogPages />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Checkking' element={<Checkking />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:slug" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/InfoAcc" element={<InfoAcc />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
