import React, {useEffect, useState} from 'react'
import cartApi from '../api/cartApi'
import {Link} from 'react-router-dom'
import CartItem from '../components/CartItem'


const Cart = () => {

  const [cartProducts, setCartProducts] = useState([])
  console.log(cartProducts)

  const getTotalPrice = () => {
    let total = 0
    cartProducts[0].cartItems.map(item => (
      total = total +  item.quantity*(item.product.price*(100-item.product.discount)/100)
    ))
    return total 
  }

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await cartApi.getAll()
        setCartProducts(response.carts)
        // console.log(response.carts)

      } catch (error) {
        console.log('Failed: ', error)
      }
    }
  
    fetchProductList()
  }, []);

  if(typeof cartProducts[0] !== 'undefined') {
    return (
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {cartProducts[0].cartItems.length} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền </span>
              <span>{getTotalPrice()}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <div className="cart__info__btn__buy">Đặt hàng</div>
            <div className="cart__info__btn__buy">
              <Link to='/catalog'>
                Tiếp tục mua hàng
              </Link>
            </div>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts[0].cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
    )
  } else{
    return (
      <div className="cart"><h3>loading.............</h3></div>
    )
  }

}

export default Cart