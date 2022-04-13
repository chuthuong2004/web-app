import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const ProductView = (props) => {

    const product = props.product

    const [previewImg, setPreviewImg] = useState(product.images[0].img)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)
    
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity +1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity -1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.images[0].img)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

  return (
    <div className="product">
        <div className="product__images">
            <div className="product__images__list">
                <div className="product__images__list__item" onClick={()=> setPreviewImg(product.images[0].img)}>
                    <img src={product.images[0].img} alt=""  className="product__images__list__item__img" />
                </div>
                <div className="product__images__list__item" onClick={()=> setPreviewImg(product.images[1].img)}>
                    <img src={product.images[1].img} alt=""   />
                </div>
                <div className="product__images__list__item" onClick={()=> setPreviewImg(product.images[2].img)}>
                    <img src={product.images[2].img} alt=""   />
                </div>
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
                    {product.price}
                </span>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">
                    Màu sắc
                </div>
                <div className="product__info__item__list">
                        {product.detail[0].detailColor.map((item, index)=>(
                            <div key={index} className={`product__info__item__list__item ${color === item.color ? 'active' : ''}`}
                                onClick={()=> setColor(item.color)}
                            >
                                <div className={`circle bg-${item.color}`}></div>
                            </div>
                        ))}
                </div>
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
                <div className="product-description__toggle__button">Thêm vào giỏ hàng</div>
            </div>
        </div>
    </div>
  )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductView