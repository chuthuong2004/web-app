import "./dataproduct.scss";
import { NavLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import productApi from "../../api/productApi"
import { useState, useEffect } from "react";

const Datatable = () => {

  const [products, setProducts] = useState([])
    console.log(products)
    
    useEffect(() => {
        const fetchProductList = async () => {
          try {
            const responseProduct = await productApi.getAll()
            setProducts(responseProduct.products)
          } catch (error) {
            console.log('Failed: ', error)
          }
        }
    
        fetchProductList()
      }, []);

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
            {products.map((product) => (
              <TableRow keys={product.id} id={product.id}>
                <TableCell className="tableCell" keys={product.id}>{product.this}</TableCell>
                
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={product.images[0].img} alt="" className="image" />
                  </div>
                </TableCell>
                <TableCell className="tableCell">{product.name}</TableCell>
                <TableCell className="tableCell">{product.title}</TableCell>
                <TableCell className="tableCell">{product.price}</TableCell>
                
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
