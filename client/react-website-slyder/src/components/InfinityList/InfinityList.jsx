import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '../Grid/Grid'
import {Link} from 'react-router-dom'

const InfinityList = props => {

    const perLoad = 8
    
    const listRef = useRef(null)
    const [data, setData] = useState([])

    const [load, setLoad] = useState(true)

    const [index, setIndex] = useState(0)


    useEffect(() => {
      setData(props.data.slice(0, perLoad))
      setIndex(1)
  }, [props.data])

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (listRef && listRef.current) {
              if (window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200) {
                  console.log("bottom reach")
                  setLoad(true)
              }
          }
          
      })
  }, [listRef])

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(props.data.length / perLoad)
      const maxIndex = props.data.length %perLoad === 0 ? pages : pages +1

      if(load && index <= maxIndex){
        const start = perLoad*index
        const end = start + perLoad

        setData(data.concat(props.data.slice(start, end)))
        setIndex(index + 1)
      }

      }
    
    getItems()
    setLoad(false)
    },[load, index, data, props.data])
    console.log(data)

  return (
    <div ref={listRef}>
      {console.log(data)}
        <Grid
              gap={20}
              col={4}
              mdCol={2}
              smCol={1}
               >
              {data.map(item => (
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
              ))}
        </Grid>
    </div>
  )
}

InfinityList.propsTypes = {
  data: PropTypes.array.isRequired
}

export default InfinityList