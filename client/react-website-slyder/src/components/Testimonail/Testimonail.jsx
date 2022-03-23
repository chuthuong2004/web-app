import React from 'react'
import cart from '../Images/cart.png'
import data from '../Testimonail/Data'
import { Content, Container } from './Testimonail.element'

export default function Testimonail(){
  return (
    <Container>
      <div className='Content'>
        <div className='ContentAbout'>
          <h1>FLASH SALE</h1>
          <p className='ContentAbout-name'>Sale vì thích sale chứ không phải sale vì ế kekeke.</p>
        </div>
      </div>

      <Content id="recommend">
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <div className="info">
                <div className="services">
                  <img src={cart} alt="" />
                </div>
                <h5 className='price_sale'>{destination.price_sale}</h5>
                <h4>{destination.price}</h4>  
                <h6 className='percent'>{destination.percent}</h6>
              </div>
            </div>
          );
        })}
      </div>
      <button>Xem tất cả <i class="IconButton fa-solid fa-angle-right"></i></button>
    </Content>
    </Container>
  )
}
