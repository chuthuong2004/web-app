import React, {useEffect} from 'react'
import productApi from '../api/productApi'


const Product = () => {

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        }
        const response = await productApi.getAll(params)
        console.log(response)
      } catch (error) {
        console.log('Failed: ', error)
      }
    }

    fetchProductList()
  }, []);
  
  // productApi.getAll().then(response => console.log(response))
  return (
    <div>Product</div>
  )
}

export default Product