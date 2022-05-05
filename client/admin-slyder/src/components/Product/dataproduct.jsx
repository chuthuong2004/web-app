import "./dataproduct.scss";
import { NavLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate} from "react-router";
import {useSelector} from "react-redux"
import { getAllProducts } from "../../api/apiRequest";
import { useDispatch } from "react-redux";
import { createAxios } from "../Form/FormSign/Redux/createInstance";
import { useEffect } from "react";
import { loginSuccess } from '../Form/FormSign/Redux/authSlice'

const Datatable = () => {

  const productList = useSelector((state) => state.products.products.allProducts)

  console.log(productList.products.map)
  const user = useSelector((state) => state.auth.login?.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let axiosJWT = createAxios(user, dispatch, loginSuccess)

    // useEffect(() => {
    //     if (!user) {
    //         navigate("/SignUp")
    //     } if (user?.accessToken) {
    //         getAllProducts(user?.accessToken, dispatch, axiosJWT)
    //     }
    // })

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Products Slyder
        <NavLink to="/new" className="link">
          Add Prodcuts
        </NavLink>
      </div>

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ID Product</TableCell>
              <TableCell className="tableCell">Images</TableCell>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Tile</TableCell>
              <TableCell className="tableCell">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.products.map((products) => (
              <TableRow keys={products.id} id={products.id}>
                <TableCell className="tableCell" keys={products.id}>{products.this}</TableCell>
                
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={products.images[0].img} alt="" className="image" />
                  </div>
                </TableCell>
                <TableCell className="tableCell">{products.name}</TableCell>
                <TableCell className="tableCell">{products.title}</TableCell>
                <TableCell className="tableCell">{products.price}</TableCell>
                
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

export default Datatable;
