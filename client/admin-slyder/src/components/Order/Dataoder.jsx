import "./dataOrder.scss";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate} from "react-router";
import {useSelector} from "react-redux"
import { getAllOrders } from "../../api/apiRequest";
import { useDispatch } from "react-redux";
import { createAxios } from "../Form/FormSign/Redux/createInstance";
import { useEffect } from "react";
import { loginSuccess } from '../Form/FormSign/Redux/authSlice'

const Dataorder = () => {
  
  const ordersList = useSelector((state) => state.orders.orders.allOrders)

  console.log("order" + ordersList.orders.map)
  const user = useSelector((state) => state.auth.login?.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let axiosJWT = createAxios(user, dispatch, loginSuccess)

    // useEffect(() => {
    //     if (!user) {
    //         navigate("/SignUp")
    //     } if (user?.accessToken) {
    //         getAllOrders(user?.accessToken, dispatch, axiosJWT)
    //     }
    // })

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Order
        <Link to="/users/new" className="link">
          Create Order
        </Link>
      </div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ID Product</TableCell>
              <TableCell className="tableCell">Username</TableCell>
              <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">Price</TableCell>
            </TableRow>
          </TableHead>
          <div>
            {ordersList.orders.map((orders) => (
              console.log(orders._id)
            ))}
          </div>
          <TableBody>
            {ordersList.orders.map((orders) => (
              <TableRow keys={orders.id} id={orders.id}>
                <TableCell className="tableCell" keys={orders.id}>{orders._id}</TableCell>
                <TableCell className="tableCell" >{orders.user.username}</TableCell>
                <TableCell className="tableCell" >{orders.user.email}</TableCell>
                <TableCell className="tableCell" >{orders.totalPrice}</TableCell>
                
                <TableCell className="tableCell">
                  <button className="viewButton">View</button>
                  <button className="deleteButton">Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dataorder;
