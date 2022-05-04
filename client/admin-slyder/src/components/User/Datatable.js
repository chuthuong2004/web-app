import "./datatable.scss";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const Datatable = () => {
  const userList = useSelector((state) => state.users.users?.allUsers)

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ID User</TableCell>
              <TableCell className="tableCell">Avatar</TableCell>
              <TableCell className="tableCell">Username</TableCell>
              <TableCell className="tableCell">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.users.map((users) => (
              <TableRow key={users.id}>
                <TableCell className="tableCell">{users._id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={users.avatar} alt="" className="image" />
                  </div>
                </TableCell>
                <TableCell className="tableCell">{users.username}</TableCell>
                <TableCell className="tableCell">{users.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Datatable;
