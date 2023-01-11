import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers,removeUser } from '../service/api.js';
import {Table, TableHead, TableRow, TableCell, TableBody, styled, Button} from '@mui/material';

const TableContainer = styled(Table)`
  width: 50%;
  margin : 20px auto;
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]); 

  useEffect( () =>{
    getAllUsers();
  },[]);

  const getAllUsers = async () =>{
      const response = await getUsers();
      setUsers(response.data);
  }

  const deleteUser = async (id) => {
    await removeUser(id);
    getAllUsers();
  }

  return (
    <TableContainer sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow >
          <TableCell>ID #</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
           users.map((user,index)=>(
            <TableRow key={user._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' component={Link} to={`/edit/${user._id}`}>Edit</Button>
              </TableCell>
              <TableCell>
                <Button variant='contained' color='secondary' onClick={() => deleteUser(user._id)}>Delete</Button>
              </TableCell>
            </TableRow>
           ))
        }
      </TableBody>
    </TableContainer>
  )
}

export default AllUsers