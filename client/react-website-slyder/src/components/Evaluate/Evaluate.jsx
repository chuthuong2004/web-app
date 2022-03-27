import React from 'react'
import { Section } from './Evaluate.elements'
import data from '../Evaluate/data'
import {FaStarHalf,FaStar} from 'react-icons/fa'

const Evaluate = () => {

  return (
    <Section className='reviews' id='reviews'>

      <h1 class="heading"> CLIENT'S <span>REVIEW</span> </h1>
      
      <div className = "swiper review-slider">
        
        {data.map((content) => {
          return(
            <div className = "swiper-wrapper ">
              <div className = "swiper-slide box ">
                <img src = {content.image} alt = '/' />
                <div className = "content">
                  <p>{content.title}</p>
                  <h3>{content.name}</h3>
                  <div className = 'stars'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </div>
                </div>
              </div>
              <div className = "swiper-pagination" ></div>
            </div>)
          })}
      </div>
    </Section>
  )
}

export default Evaluate