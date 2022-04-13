import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'
import GlobalStyle from './globalStyles'

//Pages
import SignUp from './Pages/SignupPage'
import About from "./Pages/AboutPages"
import Home from "./Pages/HomePage"
import Blog from './components/Blog/Blog';
import Catalog from "./Pages/Catalog"
import Product from './Pages/Product'
import Cart from './Pages/Cart'



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/About' element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:slug" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
