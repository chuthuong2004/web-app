import React, {useEffect, useState} from 'react'
import cartApi from '../api/cartApi'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import CartItem from '../components/CartItem'


const Cart = () => {
  const user = useSelector((state) => state.auth.login.currentUser)
  const accessToken = user?.accessToken
  console.log("accessToken: ",accessToken)
  const [cartProduct, setCartProduct] = useState([])
  console.log("CartProduct: ", cartProduct)


  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await cartApi.getMyCart(accessToken)
        console.log('cart: ', response)
        setCartProduct(response.cart)
      } catch (error) {
        console.log('Failed: ', error)
      }
    }
    fetchProductList()
  },[])
  const getTotalPrice = () => {
    const totalPrice = cartProduct.cartItems.reduce((total, item) => total +((item.product.price - (item.product.price * (item.product.discount / 100))) * item.quantity),0)
    console.log("total: ", totalPrice)
    return totalPrice
  }


  if( cartProduct.length !== 0) {
    return (
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {cartProduct.cartItems.length} sản phẩm trong giỏ hàng</p>
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
          {cartProduct.cartItems.map((item, index) => (// này phải lặp rồi , này phải lặp so sánh id r
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
    )
  } else{
    return (
      <>
        <div className="cart"><h3>Không có sản phẩm nào</h3></div>
        <Link to='/catalog'>Tiếp tục mua hàng</Link>
      </>
    )
  }

}

export default Cart