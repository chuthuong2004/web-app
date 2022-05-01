import "./dataproduct.scss";
import { NavLink } from "react-router-dom";


const Datatable = () => {

    const product = ((state) => state.product)

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Products Slyder
        <NavLink to="/new" className="link">
          Add Prodcuts
        </NavLink>
      </div>

        {/* <div className="product__images">
            <div className="product__images__list">
                <div className="product__images__list__item">
                    <img src={product.images[0].img} alt=""/>
                </div>
                <div className="product__images__list__item" >
                    <img src={product.images[1].img} alt="" />
                </div>
                <div className="product__images__list__item">
                    <img src={product.images[2].img} alt=""/>
                </div>
            </div>
        </div> */}
    </div>
  );
};

export default Datatable;
