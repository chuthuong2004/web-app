import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { productInputs } from "./formSource"

import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './globalStyles'

//Pages
import SignUp from './Pages/SignupPage'
import Home from "./Pages/HomePage"
import List from "./Pages/List/List"
import New from "./Pages/new/New"
import Product from "./Pages/Product/Product"



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/List' element={<List />} />
        <Route path="/New" element={<New inputs={productInputs} title="Add New Product" />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
