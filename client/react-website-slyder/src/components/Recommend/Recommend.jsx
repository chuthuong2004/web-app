import React, {useState} from 'react'
import cart from '../Images/cart.png'
import data from '../Recommend/Data'
import packages from '../Recommend/Packages'
import { Content } from './Recommend.element';
import {Link} from 'react-router-dom'

export default function Recommend() {
  
  const [active, setActive] = useState(1);
  
  return (
    <Content id="recommend">
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : "unactive"}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
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
                <h4>{destination.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/catalog"><button>Xem tất cả <i class="IconButton fa-solid fa-angle-right"></i></button></Link>
    </Content>
  );
}
