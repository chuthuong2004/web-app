import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './globalStyles'

//Pages
import SignUp from './Pages/SignupPage'
import Home from "./Pages/HomePage"
import List from "./Pages/List/list"
import Sidebar from './components/SiderBar/Sidebar';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/List' element={<List />} />
      </Routes>
    </Router>
  )
}

export default App
