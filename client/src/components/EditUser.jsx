import {FormControl, FormGroup, InputLabel,Input, Typography, styled, Button} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser, getSingleUser } from '../service/api';

const Conatiner = styled(FormGroup)`
    width:50%;
    margin : 20px auto;
    & > div {
        margin-top : 20px;
    }
`;

const defaultValue = {
    name: ' ',
    username: ' ',
    email: '',
    phone: '',
};

const EditUser = () =>{ 

    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect( () => {
        loadUserDetails();
    },[]);

    const loadUserDetails = async () =>{
       const res = await getSingleUser(id);
       setUser(res.data);
    };

    const onValueChange = (e) =>{
        setUser({ ...user ,[e.target.name]: e.target.value });
    }

const editUser = async() => {
   await updateUser(user,id);
   navigate('/all');
}

    return (
        <Conatiner>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="name" value={user.name}/>
            </FormControl>

            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="username" value={user.username}/>
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="email" value={user.email}/>
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>

            <FormControl>
                <Button variant='contained' onClick={()=> editUser()}>Edit User</Button>
            </FormControl>

        </Conatiner>
    );
}

export default EditUser;