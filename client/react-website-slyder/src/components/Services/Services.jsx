import React from 'react'
import blog1 from '../Images/blog1.jpg'
import blog2 from '../Images/blog2.jpg'
import blog3 from '../Images/blog3.jpg'
import {Container} from './Services.element'

export default function Services() {
  return (
    <>
      <Container>
        <div className='ImagesItem'>
          <div className='Image'>
            <img src={blog1} alt="" />
          </div>

          <div className='Image'>
            <img src={blog2} alt="" />
          </div>

          <div className='Image'>
            <img src={blog3} alt="" />
          </div>
        </div>

        <div className='Content'>
          <div className='ContentAbout'>
            <h1>ALL ITEMS</h1>
            <p className='ContentAbout-name'>Slyder-ers ơi! Hãy luôn đồng hành cùng team Slyder nhé!</p>
            <p className='ContentAbout-From'>Form Slyder with love</p>
          </div>
        </div>
      </Container>
    </>
  )
}
