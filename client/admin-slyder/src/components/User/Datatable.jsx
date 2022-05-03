import "./datatable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Datatable = () => {

  const useList = useSelector((state) => state.users.users?.allUsers)
  
  // const handleDelete = (id) => {
  //   DeleteUser(user?.accessToken,dispatch,id, axiosJWT)
  // }
  return (
    <div className="datatable">
      <div className="datatableTitle">
        User Slyder
        <NavLink to="/new" className="link">
          Add New
        </NavLink>
      </div>
        <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ID</TableCell>
              <TableCell className="tableCell">Avatar</TableCell>
              <TableCell className="tableCell">Username</TableCell>
              <TableCell className="tableCell">Gmail</TableCell>
              <TableCell className="tableCell">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {useList?.map((users, id) => (
              <TableRow key={users.id}>
                <TableCell className="tableCell">{users._id}</TableCell>
                
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={users.avatar} alt="" className="image" />
                  </div>
                </TableCell>
                <TableCell className="tableCell">{users.username}</TableCell>
                <TableCell className="tableCell">{users.email}</TableCell>
                <TableCell className="tableCell">{users?.isAdmin ? 'Admin' : 'User'}</TableCell>
                
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
