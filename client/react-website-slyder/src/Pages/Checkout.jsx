import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cartApi from '../api/cartApi'
import axios from 'axios';


const Checkout = () => {
  const user = useSelector((state) => state.auth.login.currentUser)
  const accessToken = user?.accessToken
  console.log("accessToken: ",accessToken)
  const [cartProduct, setCartProduct] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [city, setCity] = useState([])
  const [optionCity, setOptionCity] = useState("")
  const [quan, setQuan] = useState([])
  const [optionQuan, setOptionQuan] = useState("")
  const [phuong, setPhuong] = useState([])
  console.log("cartproduct",cartProduct)


  const handleCity = (e) => {
    const dataCity = e.target.value
    setOptionCity(dataCity)
    console.log("datacity", dataCity)
    const cityTam = city.find((item, index) => item.name === dataCity)
    console.log("cityTam", cityTam)
    setQuan(cityTam.districts)
  }

  const handleQuan = (e) => {
    const dataQuan = e.target.value
    setOptionQuan(dataQuan)
    console.log("Quan", dataQuan)
    const phuongTam = quan.find((item, index) => item.name === dataQuan)
    console.log("Danh sach phuong", phuongTam)
    setPhuong(phuongTam.wards)
  }


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

  useEffect(() => {
    const fetchAddress = async () => {
      await axios.get(`https://provinces.open-api.vn/api/?depth=3`)
      .then(res => {
        const data = res.data;
        console.log("Data",data)
        setCity(data)
        
      })
      .catch(error => console.log(error));
    }
    fetchAddress()
  }, [])

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
              <div className="checkout-container__info__list">
                <div className='checkout-container__info__list__col25'>
                  <label>Họ tên</label>
                </div>
                <div className='checkout-container__info__list_col75'>
                  <input />
                </div>
              </div>
              <div className="checkout-container__info__list">
                <div className='checkout-container__info__list__col25'>
                  <label>Số điện thoại</label>
                </div>
                <div className='checkout-container__info__list_col75'>
                  <input />
                </div>
              </div>
              <div className="checkout-container__info__list">
                <div className='checkout-container__info__list__col25'>
                  <label>Tỉnh/Thành phố</label>
                </div>
                <div className='checkout-container__info__list_col75'>
                <select id="country" name="country" onChange={e => handleCity(e)} >
                  <option >Chọn</option>
                  {city.map((item, index) => (
                    <option value={item.name}  >{item.name}</option>
                  ))}
                </select>
                </div>

              </div>
              <div className="checkout-container__info__list">
                <div className='checkout-container__info__list__col25'>
                  <label>Quận/Huyện</label>
                </div>
                <div className='checkout-container__info__list_col75'>
                <select  name="quan" onChange={e => handleQuan(e)}>
                  {/* {  optionCity.map((item, index) => (
                      <option value={item.name} onChange={e => handleQuan(e)} >{item.name}</option>
                    ))} */}
                    <option>Chọn</option>
                    {quan.map((item, index) =>(
                      <option value={item.name}> {item.name} </option>
                    ))}
                  </select>

                </div>

              </div>
              <div className="checkout-container__info__list">
                <div className='checkout-container__info__list__col25'>
                  <label>Phường/Xã</label>
                </div>
                <div className='checkout-container__info__list_col75'>
                  <select  name="phuong" >
                  {/* {  optionCity.map((item, index) => (
                      <option value={item.name} onChange={e => handleQuan(e)} >{item.name}</option>
                    ))} */}
                    <option>Chọn</option>
                    {phuong.map((item, index) =>(
                      <option value={item.name}> {item.name} </option>
                    ))} 
                  </select>
                </div>

              </div>
              <div className="checkout-container__info__list">
              <div className='checkout-container__info__list__col25'>
                  <label>Đường</label>
                </div>
                <div className='checkout-container__info__list_col75'>
                  <input />
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout