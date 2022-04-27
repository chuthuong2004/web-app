import React from 'react'
import {
  AboutBackground,
  ContentAbout,
  AboutHeadding,
  AboutInner
} from '../FormAbout/AboutForm.element'
import {AboutData, data} from "./AboutData"
import {
  ContainerContact,
  ContactContent
} from "../FormContact/Contact.element"

const AboutForm = () => {
  return (
    <>
      <ContentAbout>
        <AboutBackground>
          
          <ContainerContact>
            <ContactContent>
              <div className='content_title_img'>
                <div className='content_tile_pos'>
                  <p>Giới Thiệu</p>
                </div>
              </div>
            </ContactContent>
          </ContainerContact>

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