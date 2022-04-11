import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ProductView = (props) => {

    const product = props.product

    const [previewImg, setPreviewImg] = useState(product.images[0].img)
  return (
    <div className="product">
        <div className="product__images">
            <div className="product__images__list">
                <div className="product__images__item">
                    <img src={product.images[0].img} alt="" onClick={()=> setPreviewImg(product.images[0].img)}/>
                </div>
                <div className="product__images__item">
                    <img src={product.images[1].img} alt=""  onClick={()=> setPreviewImg(product.images[1].img)} />
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