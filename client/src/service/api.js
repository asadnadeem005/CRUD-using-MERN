import axios from 'axios';

const URL = "http://localhost:8000";

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`,data);
    } catch (error) {
        console.log('Error while connecting with API to Add User ', error);
    }   
};

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/users`);
    }catch (error) {
        console.log("Error while getting the users from DataBase");
    }
}

export const getSingleUser = async (id) => {
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error)
    {
        console.log("Error occured while get the single user ",error);
    }

};

export const updateUser = async (user, id) => {
    try {
        return await axios.put(`${URL}/${id}`,user);
    } catch (error) {
        console.log('Error while connecting with API to Edit User ', error);
    }   
};

export const removeUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while connecting with API to Remove User ', error);
    }   
};