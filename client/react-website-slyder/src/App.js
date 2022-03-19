import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Recommend from './components/Recommend/Recommend'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <ScrollToTop />
    </>
  )
}

export default App
