import "./product.scss"
import Dataprodcut from "../../components/Product/dataproduct"
import Sidebar from "../../components/SiderBar/Sidebar"

const Product = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Dataprodcut />
            </div>
        </div>
    )
}

export default Product