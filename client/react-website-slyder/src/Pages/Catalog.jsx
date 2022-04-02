import React, {useEffect, useState, useCallback} from 'react'
import categoryApi from '../api/categoryApi'
import productApi from '../api/productApi'
import imgItem from '../components/Images/Destination1_1.png'
import imgItem2 from '../components/Images/Destination_3.png'
import Grid from '../components/Grid/Grid'
import Checkbox from '../components/Checkbox/Checkbox'

const Catalog = () => {
  
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])



  const initFilter = {
    category: [],
  }

  const [filter, setFilter] = useState(initFilter)

  const filterSelect = (type, checked, item) => {
    if(checked){
      if(type === "CATEGORY"){
            setFilter({...filter, category: [...filter.category, item._id]})
        }
    } else {
      if(type === "CATEGORY"){
          const newCategory = filter.category.filter(e => e !== item._id);
          setFilter({...filter, category: newCategory})
      }
     }
  }
  const clearFilter = () => setFilter(initFilter)

  const  updateProducts = useCallback(
    () => {
      let temp= products
      if (filter.category.length > 0) {
        temp = temp.filter(e => filter.category.includes(e.category))
      }
      setProducts(temp)
    },
    [filter, setProducts],
  )

  useEffect(() => {
    updateProducts()
  }, [updateProducts])





  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        }
        const responseCategory = await categoryApi.getAll(params)
        const responseProduct = await productApi.getAll(params)
        setCategory(responseCategory)
        setProducts(responseProduct)
        console.log(responseCategory)
        console.log(responseProduct)
      } catch (error) {
        console.log('Failed: ', error)
      }
    }

    fetchProductList()
  }, []);
  
  // productApi.getAll().then(response => console.log(response))
  const listProduct = products.map(item => (
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
      {console.log(filter)}
        <div className="catalog__filter">
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Danh muc san pham
            </div>
            <div className="catalog__filter__widget__content">
              {
                category.map((item, index) => (
                   <div key={index} className="catalog__filter__widget__content__item">
                     <Checkbox
                      label={item.name}
                      onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                      checked={filter.category.includes(item._id)}
                    />
                   </div>
                ))}
            </div>
        </div>
          <div className="catalog__filter__widget">
              <div className="catalog__filter__widget__content">
                  <button onClick={clearFilter}>Xoá bộ lọc</button>
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