import React from 'react'
import cart from '../Images/cart.png'
import data from '../Testimonail/Data'
import { Content, Container } from './Testimonail.element'
import { NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Testimonail(){

  const user = useSelector((state) => state.auth.login.currentUser)

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
              <h5>{destination.title}</h5>
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
      {user?(
        <>
          <NavLink to="/catalog"><button>Xem tất cả <i class="IconButton fa-solid fa-angle-right"></i></button></NavLink>
        </>
      ):(
        <>
          <NavLink to="/Signup"><button>Xem tất cả <i class="IconButton fa-solid fa-angle-right"></i></button></NavLink>
        </>
      )}
    </Content>
    </Container>
  )
}
