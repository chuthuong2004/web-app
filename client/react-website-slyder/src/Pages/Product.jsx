import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import productApi from '../api/productApi'
import Grid from '../components/Grid/Grid'
import ProductView from '../components/ProductView'
import {Link} from 'react-router-dom'


const Product = props => {

  const [products, setProducts] = useState([])
  console.log(products)
  const { slug } = useParams()

  
  const product = products.find( e => slug === e.slug)
  console.log(product)



  const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

  const relatedProducts = getProducts(4)



  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const responseProduct = await productApi.getAll()
        setProducts(responseProduct.products)
      } catch (error) {
        console.log('Failed: ', error)
      }
    }

    fetchProductList()
  }, []);

  if(typeof product !== 'undefined'){
    return (
      <div className="product-container">
        <div>
          <div>
            <ProductView product={product} />
          </div>
        </div>
        <div>
          <div className="product-container__other">
            Có thể bạn quan tâm
          </div>
          <div>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                relatedProducts.map((item, index) => (
                  <Link to={`/catalog/${item.slug}`}>
                    <div className="product-card" key={item._id}>
                    <div className="product-card__image">
                      <img src={item.images[0].img} />
                      <img src={item.images[1].img} />
                    </div>
                    <h3 className="product-card__name">{item.name}</h3>
                    <p className="product-card__price">{item.price*(100-item.discount)/100} Vnđ <span className="product-card__price__old">{item.price}</span></p>
                </div>
                  </Link>
                ))
              }
            </Grid>
          </div>
        </div>
      </div>
      
    )
  }
  else {
    return(
      <div className="product"></div>
    )
  }
}

export default Product