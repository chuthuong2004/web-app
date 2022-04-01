import React, {useEffect, useState} from 'react'
import productApi from '../api/productApi'
import imgItem from '../components/Images/Destination1_1.png'


const Catalog = () => {
  
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        }
        const response = await productApi.getAll(params)
        console.log(response)
        setProduct(response)
      } catch (error) {
        console.log('Failed: ', error)
      }
    }

    fetchProductList()
  }, []);
  
  // productApi.getAll().then(response => console.log(response))
  const listProduct = product.map(item => (
    <div className="card" key={item._id}>
      <div className="card_img">
        <img src={imgItem} />
      </div>
      <div className="card_header">
        <h2>{item.name}</h2>
        <p>{item.price} <span>{item.price*(100-item.discount)/100} Vnđ</span></p>
        <div className="btn">
          Thêm vào giỏ hàng
        </div>
      </div>
    </div>
  ))
  return (
    <div className="container">
      <div className="main_content">
        <h3 className="h3_product">Sản phẩm</h3>
        {listProduct}
      </div>
    </div>
  )
}

export default Catalog