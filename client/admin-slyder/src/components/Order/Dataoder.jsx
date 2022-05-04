import "./dataOrder.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ordersApi from "../../api/orderApi";

const Dataorder = () => {
  
  const [orders, setOrders] = useState([]);
    console.log(orders)

    useEffect(() => {
        const fetchOrdersList = async () => {
            try{
                const responseOrders = await ordersApi.getAll();
                setOrders(responseOrders.orders)
            }catch(error){
                console.log("faile" , error);
            }
        }

        fetchOrdersList();
    }, []);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Order
        <Link to="/users/new" className="link">
          
        </Link>
      </div>
      
    </div>
  );
};

export default Dataorder;
