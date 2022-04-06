import { Container } from '../../globalStyles'
import React from 'react'
import { AboutBackground } from './AboutForm.element'
import AboutData from "./AboutData"
import Background from "../Images/background.jpg"

const AboutForm = () => {
  return (
    <>
        <Container>
            <AboutBackground>
              <img src={Background} alt ="/" />
            </AboutBackground>
        </Container>
    </>
  )
}

export default AboutForm