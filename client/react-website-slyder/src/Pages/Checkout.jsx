import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cartApi from '../api/cartApi'


const Checkout = () => {
  const user = useSelector((state) => state.auth.login.currentUser)
  const accessToken = user?.accessToken
  console.log("accessToken: ",accessToken)
  const [cartProduct, setCartProduct] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  console.log("cartproduct",cartProduct)


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

  useEffect(()=>{
    setTotalPrice(cartProduct.reduce((total, item) => total +((item.product.price - (item.product.price * (item.product.discount / 100))) * item.quantity),0))
  },[cartProduct])

  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="checkout-container__cart">
          <table>
            <tr>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
            {cartProduct.map((item, index) => (
              <tr>
                <td className="checkout__container__cart__td"><img src={item.product.images[0].img }/><p>{item.product.name}</p></td>
                <td>{(item.product.price*((100-item.product.discount)/100))}đ</td>
                <td>{item.quantity}</td>
                <td>{(item.product.price*((100-item.product.discount)/100))*item.quantity}</td>
              </tr>
            ))}
            <tr>
              <td colspan= "2">Tổng tiền</td>
              <td colspan= "2">{totalPrice}</td>
            </tr>
          </table>
        </div>
        <div className="checkout-container__info">
              <div>
                <input></input>
              </div>
              <div>
                <input></input>
              </div>
              <div>
                <input></input>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout