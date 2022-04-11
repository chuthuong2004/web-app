import React, {useEffect, useState, useCallback, useRef} from 'react'
import categoryApi from '../api/categoryApi'
import productApi from '../api/productApi'
import Grid from '../components/Grid/Grid'
import Checkbox from '../components/Checkbox/Checkbox'
import InfinityList from '../components/InfinityList/InfinityList'

const Catalog = () => {

  const [productList, setProductList] = useState([])
  
  const [products, setProducts] = useState([])
  
  const [category, setCategory] = useState([])




  const initFilter = {
    category: []
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
      let temp= productList
      if (filter.category.length > 0) {
        temp = temp.filter(e => filter.category.includes(e.category._id))
      }
      setProducts(temp)
    },
    [filter, productList],
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
        setCategory(responseCategory.categories)
        setProducts(responseProduct.products)
        setProductList(responseProduct.products)
      } catch (error) {
        console.log('Failed: ', error)
      }
    }

    fetchProductList()
  }, []);

  const filterRef= useRef(null)

  const showHideFilter = () => filterRef.current.classList.toggle('active')
  
  // productApi.getAll().then(response => console.log(response))
  return (
    <>
    <div className="catalog">
        <div className="catalog__filter" ref={filterRef}>
        <div className="catalog__filter__toggle">
          <div className='catalog__filter__close' onClick={()=> showHideFilter()}>
            <i className="bx bx-left-arrow-alt">Thu gọn</i>
          </div>
        </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title"> 
              Danh mục sản phẩm
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
                  <div className="catalog__filter__widget__content__button"
                    onClick={clearFilter}>
                    <span>Xoá bộ lọc</span>
                  </div>
             </div>
            </div>
        </div>
        <div className="catalog__filter__toggle">
          <div className="catalog__filter__toggle__often" onClick={() => showHideFilter()}>Bộ lọc</div>
        </div>
        <div className="catalog__content">
            
            <InfinityList 
              data={products}
            />
        </div>
    </div>
    </>
  )
}

export default Catalog