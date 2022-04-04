import React, {useEffect} from 'react'
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignupPage'
import GlobalStyle from './globalStyles'



function App () {
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
          <Route path="/signup" exact component={<SignUp />} />
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
