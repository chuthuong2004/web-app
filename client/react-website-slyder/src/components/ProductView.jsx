import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ProductView = (props) => {

    const product = props.product

    const [previewImg, setPreviewImg] = useState(product.images[0].img)
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
        </div>
    </div>
  )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductView