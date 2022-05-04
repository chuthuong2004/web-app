import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {FaStar} from 'react-icons/fa'
import cartApi from '../api/cartApi'
import { useDispatch, useSelector } from 'react-redux'
import productApi from '../api/productApi'
import { get } from 'react-hook-form'

const ProductView = (props) => {

    const user = useSelector((state) => state.auth.login.currentUser)
    const accessToken = user?.accessToken

    const product = props.product

    const [previewImg, setPreviewImg] = useState(product.images[0].img)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)
    
    const [quantity, setQuantity] = useState(1)

    const [activeImg, setActiveImg] = useState(0)

    const [productApi, setProductApi] = useState()

    const [amount, setAmount] = useState()


    console.log(product._id, quantity, color, size)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity +1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity -1)
        }
    }

    const check = () => {
        if (color === undefined) {
            alert("Vui lòng chọn màu sắc!")
            return false
        }

        if(size === undefined) {
            alert("Vui lòng chọn size!")
            return false
        }

        return true
    }


    const addToCart = (id, quantity, color, size) => {
        if (check() ){
            if (quantity <= amount) {
                const res = cartApi.addItem(id, quantity, color, size, accessToken)
                alert("Đã thêm thành công")
            } else {
                console.log("quantity, amout", quantity, amount)
                alert("Số lượng mua đã vượt quá số hàng trong kho")
            }



           // kiểm tra nếu trà về status 200 thì hiển thị số lượng số hàng lên nha, 
        //    status 200 là ok, còn lại là bị lỗi
        //    400 là lỗi về dữ liệu
        //     500 là lỗi serrver
        //    if(res.)
        }  
    }

    // const getAll = () => {
    //     const res2 = productApi.getProduct(product._id, accessToken)
    //     setProductApi(res2)
    // }
    // getAll()
    // console.log("Product Api: ", productApi)



    useEffect(() => {
        setPreviewImg(product.images[0].img)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

  return (
      <>
    <div className="product">
        <div className="product__images">
            <div className="product__images__list">
                {product.images.map((item, index) => (
                    <div className="product__images__list__item" onClick={()=> setPreviewImg(item.img)}>
                        <img src={item.img} alt=""  onClick={() => setActiveImg(index)} className={`${activeImg === index ? 'activeImg' : ''}`} />
                    </div>
                ))}
                
            </div>
            <div className="product__images__main">
                <img src={previewImg} alt="" />
            </div>
            <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.desProduct}}>

                </div>
                <div className="product-description__toggle">
                    <div className="product-description__toggle__button" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="product__info">
            <h1 className="product__info__title">{product.title}</h1>
            <div className="product__info__item">
                <span className="product__info__item__price">
                    {(product.price*(100-product.discount)/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                <span>đ</span>
                <span className="product__info__item__discount">
                    {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ
                </span>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">
                    Size
                </div>
                <div className="product__info__item__list">
                        {product.detail.map((item, index)=>(
                                <div key={index} className={`product__info__item__list__item ${item.size === size ? 'active' : ''}`}
                                    onClick={()=> setSize(item.size)}
                                >
                                    <span className="product__info__item__list__item__size">                                
                                        {item.size}
                                    </span>
                                    
                                </div>
                        ))}
                    </div>
                </div>
            
            <div className="product__info__item">
                <div className="product__info__item__title">
                    Color
                </div>
                <div className="product__info__item__list">
                    {typeof size === 'undefined' ? <p className="product__info__item__list__err">Vui lòng chọn size</p> : <></>}
                            {product.detail.map((item, index) => (
                                <>
                                    {console.log(item)}
                                    {(item.size !== size  ? <div></div> : 
                                        (
                                            item.detailColor.map((item2, index2) => (
                                                <>
                                                   { (item2.amount <= 0 ? <div></div> :
                                                   <>
                                                        <div key={index2} className={`product__info__item__list__item ${color === item2.color ? 'active' : ''}`}
                                                        onClick={()=> {setColor(item2.color); setAmount(item2.amount)}}
                                                        >
                                                            
                                                            <div className={`circle bg-${item2.color}`}></div>
                                                            
                                                        </div>
                                                        <div className="product__info__item__list__amount">
                                                            <p className={color === item2.color ? 'active' : 'display'}>Size {item.size} màu {item2.color} còn {item2.amount} sản phẩm trong kho</p>
                                                        </div>
                                                    </>
                                                    )}
                                                </>
                                            ))
                                        ))}
                                      
                                </>

                            ))}

                </div>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">
                    Số lượng
                </div>
                <div className="product__info__item__quantity">
                    <div className="product__info__item__quantity__btn" onClick={()=>updateQuantity()}>
                        <i className="bx bx-minus">-</i>
                    </div>
                    <div className="product__info__item__quantity__btn">
                        {quantity}
                    </div>
                    <div className="product__info__item__quantity__btn" onClick={()=>updateQuantity('plus')}>
                        <i className="bx bx-plus">+</i>
                    </div>
                </div>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__button">
                    <div className="product__info__item__button__CartButton" onClick={() => addToCart(product._id, quantity, color, size)}>Thêm vào giỏ hàng</div>
                    <div className="product__info__item__button__BuyButton" >Mua ngay</div>
                </div>
            </div>
        </div>
    </div>
    <div className="product-review">
        <div className="product-review__title">Đánh giá sản phẩm</div>
        <div className="product-review__list">
        {product.reviews.map((item) => (
            <div key={product.id} className="product-review__list__item">
                <div className="product-review__list__item__user">User: {item.user.username}</div>
                <div className="product-review__list__item__info">{(item.date)}</div>
                <div className="product-review__list__item__comment">{item.content}</div>
                {
                    [...Array(item.star)].map(star => (
                        <FaStar/>
                    ))
                }
            </div>
        ))}
        </div>
    </div>
    </>
  )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductView