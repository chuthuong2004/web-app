import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Recommend from './components/Recommend/Recommend'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Testimonail from './components/Testimonail/Testimonail'

const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <ScrollToTop />
      <Testimonail />
    </>
  )
}

export default App
