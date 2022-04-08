import React, { useEffect } from 'react'
import Background from "../components/Background/Background"
import Services from '../components/Services/Services'
import Recommend from '../components/Recommend/Recommend'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Testimonail from '../components/Testimonail/Testimonail'
import scrollreveal from "scrollreveal";
import Blog from '../components/Blog/Blog'
import Evaluate from '../components/Evaluate/Evaluate'

function Home() {
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
        <>
            <Background />
            <Services />
            <Recommend />
            <ScrollToTop />
            <Testimonail />
            <Blog />
            <Evaluate />
        </>
    )
}

export default Home
