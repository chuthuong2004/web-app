import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import cartApi from '../api/cartApi'

const CartItem = (props) => {
    const dispatch = useDispatch()

    const user = useSelector((state) => state.auth.login.currentUser)
    const accessToken = user?.accessToken
    const [item, setItem] = useState(props.item)

    const  [quantity, setQuantity] = useState(props.item.quantity)
    console.log(props.item)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = (opt) => {
        if (opt === '+') {
            setQuantity(quantity+1)
        }

        if (opt === '-') {
            setQuantity(quantity-1 === 0 ? 1 : quantity-1)
        }
    }

    const removeCartItem = (id, e) => {
        e.preventDefault()
        console.log('delete')
        try {
            var res = cartApi.delete(id, accessToken)
            console.log('success',res)
            setItem(res.carts)
            console.log(res.carts)
    
          } catch (error) {
            console.log('Failed: ', error)
          }

    }

    console.log('cartItem alo lao: ', item)
  return (
    <div className="cart__item">
        <div className="cart__item__image">
            <img src={item.product.images[0].img} alt="" />
        </div>
        <div className="cart__item__info">
            <div className="cart__item__info__name">
                <Link to={`/catalog/${item.product.slug}`}>
                    {`${item.product.name} - ${item.color} - ${item.size}`}
                </Link>
            </div>
            <div className="cart__item__info__price">
                {(item.product.price*(100-item.product.discount))}đ
            </div>
            <div className="cart__item__info__quantity">
            <div className="product__info__item__quantity">
                    <div className="product__info__item__quantity__btn" onClick={() =>updateQuantity('-')}>
                        <i className="bx bx-minus" >-</i>
                    </div>
                    <div className="product__info__item__quantity__btn">
                        {quantity}
                    </div>
                    <div className="product__info__item__quantity__btn" onClick={() =>updateQuantity('+')}>
                        <i className="bx bx-plus" >+</i>
                    </div>
                </div>
            </div> 
            <div className="cart__item__info__del" onClick={(e) => removeCartItem(item.product._id, e)}>
                <DeleteIcon className="cart__item__info__del__btn" />
            </div>
        </div>  
    </div>
  )
}

CartItem.propTypes = {
    item: PropTypes.object
}
export default CartItem