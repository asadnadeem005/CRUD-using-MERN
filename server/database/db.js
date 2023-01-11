import mongoose from "mongoose";

const Connection = async () => {
    const URL = 'mongodb://127.0.0.1:27017/first_database';
    
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(URL);
        console.log("Database is connected Successfully");
    }catch(error) {
        console.log(`Error Loged while connecting the Database`, error);
    }
}

export default Connection;