import { response } from 'express';
import User from '../models/user-schema.js';

export const addUser = async (request, response) =>{
    const user = request.body;
    const newuser = new User(user);

    try{
        await newuser.save();
        response.status(200).json(newuser);
    }catch(error)
    {
        response.status(409).json({message : error.message});
    }
};

export const getUsers = async (request, response) =>{
    try{
       const users = await User.find({});
       response.status(200).json(users); 
    }catch(error)
    {
        response.status(404).json({message: error.message});
    }

};

export const getSingleUser = async (request, response) => {
    try{
        // const user = await User.find({_id:request.params.id});
        const user = await User.findById(request.params.id);
        response.status(200).json(user); 
     }catch(error)
     {
         response.status(404).json({message: error.message});
     }
};

export const updateUser = async (request, response) => {
    const user = request.body;
    const update_user = new User(user);

    try{
        const response = await User.updateOne({ _id: request.params.id},update_user);
        response.status(200).json(update_user);
     }catch(error)
     {
         response.status(404).json({message: error.message});
     }
};

export const removeUser = async (request, response) => {

    try{
        const response = await User.deleteOne({ _id: request.params.id});
        response.status(200).json({message: "User Remove Successfully"});
     }catch(error)
     {
         response.status(404).json({message: error.message});
     }
};