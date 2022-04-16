import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

const CartItem = (props) => {
    const dispatch = useDispatch()

    const [item, setItem] = useState(props.item)

    const  [quantity, setQuantity] = useState(props.item.product.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.product.quantity)
    }, [props.item])

  return (
    <div className="cart__item">
        {props.item.product.title}
    </div>
  )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem