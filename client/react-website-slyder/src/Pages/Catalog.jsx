import React, {useEffect, useState} from 'react'
import productApi from '../api/productApi'
import imgItem from '../components/Images/Destination1_1.png'
import imgItem2 from '../components/Images/Destination_3.png'
import Grid from '../components/Grid/Grid'
import catelory from '../Fake/catelory'
import colors from '../Fake/product-color'
import Checkbox from '../components/Checkbox/Checkbox'

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
    <div className="product-card" key={item._id}>
      <div className="product-card__image">
        <img src={imgItem} />
        <img src={imgItem2} />
      </div>
      <h3 className="product-card__name">{item.name}</h3>
      <p className="product-card__price">{item.price*(100-item.discount)/100} Vnđ <span className="product-card__price__old">{item.price}</span></p>
    </div>
  ))
  return (
    <div className="catalog">
        <div className="catalog__filter">
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Danh muc san pham
            </div>
            <div className="catalog__filter__widget__content">
              {
                catelory.map((item, index) => (
                   <div key={index} className="catalog__filter__widget__content__item">
                     <Checkbox label={item.display} />
                   </div>
                ))}
            </div>

            <div className="catalog__filter__widget__title">
              Màu sắc
            </div>
            <div className="catalog__filter__widget__content">
              {
                colors.map((item, index) => (
                   <div key={index} className="catalog__filter__widget__content__item">
                     <Checkbox label={item.display} />
                   </div>
                ))}
            </div>

          </div>
        </div>
        <div className="catalog__content">
            <Grid
              gap={20}
              col={4}
              mdCol={2}
              smCol={1}
               >
              {listProduct}
            </Grid>
        </div>
    </div>
  )
}

export default Catalog