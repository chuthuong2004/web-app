import React, {useState, useEffect} from 'react'
import productApi from '../api/productApi'
import cartApi from '../api/cartApi'
import { useSelector } from 'react-redux'

const Tess = () => {

    const user = useSelector((state) => state.auth.login.currentUser)
    const accessToken = user?.accessToken

    const [CartProduct, setCartProduct] = useState({})
    console.log(typeof CartProduct)
    console.log( CartProduct)    

    useEffect(() => {
        const fetchProductList = async () => {
          try {
            const response = await cartApi.getMyCart(accessToken)
            setCartProduct(response.cart)
          } catch (error) {
            console.log('Failed: ', error)
          }
        }
        fetchProductList()
      },[])

  return (
    <div className="tess">{CartProduct.createdAt}</div>
  )
}

export default Tess