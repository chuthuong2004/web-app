import React from 'react'
import {
  AboutBackground,
  ContentAbout,
  AboutHeadding,
  AboutInner
} from '../FormAbout/AboutForm.element'
import {AboutData, data} from "./AboutData"
import Background from "../../Images/background.jpg"

const AboutForm = () => {
  return (
    <>
      <ContentAbout>
        <AboutBackground>
          <img src={Background} alt="/" />

          <AboutHeadding>
            <div className='history'>
              {data.map((el) => {
                return(
                  <p>{el.content}</p>
                )
              })}
            </div>
          </AboutHeadding>

          <AboutInner>
            {AboutData.map((el, index) => {
              return(
                <div className='about' key={index}>
                  <img src={el.img} alt="/" />

                  <div className='about_item'>
                    <p>{el.title}</p>
                  </div>
                </div>
              )
            })}
          </AboutInner>
        </AboutBackground>
      </ContentAbout>
    </>
  )
}

export default AboutForm