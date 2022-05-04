import React, {useEffect, useState} from 'react'
import cartApi from '../api/cartApi'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import CartItem from '../components/CartItem'
import getMyCart from '../components/Form/FormSign/Redux/cartSlice'


const Cart = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.auth.login.currentUser)
  const accessToken = user?.accessToken
  console.log("accessToken: ",accessToken)
  const [cartProduct, setCartProduct] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  console.log("CartProduct: ", cartProduct)


  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await cartApi.getMyCart(accessToken)
        console.log('cart: ', response)
        setCartProduct(response.cart.cartItems)
      } catch (error) {
        console.log('Failed: ', error)
      }
    }
    fetchProductList()
  },[])

  // useEffect(() => {
  //   dispatch(getMyCart({}))
  // },[dispatch])

  // const getTotalPrice = () => {
  //   const totalPrice = cartProduct.reduce((total, item) => total +((item.product.price - (item.product.price * (item.product.discount / 100))) * item.quantity),0)
  //   console.log("total: ", totalPrice)
  //   return totalPrice
  // }
  useEffect(()=>{
    setTotalPrice(cartProduct.reduce((total, item) => total +((item.product.price - (item.product.price * (item.product.discount / 100))) * item.quantity),0))
  },[cartProduct])


    return (
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {cartProduct.length} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền </span>
              <span>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</span>
            </div>
          </div>
          <div className="cart__info__btn">
            {(cartProduct.length === 0 ? <></> : 
                          <Link to="/checkout"><div className="cart__info__btn__buy">Đặt hàng</div></Link>
            )}

            <Link to='/catalog'>
              <div className="cart__info__btn__buy">
                  Tiếp tục mua hàng

              </div>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProduct.map((item, index) => (// này phải lặp rồi , này phải lặp so sánh id r
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
    )

}

export default Cart