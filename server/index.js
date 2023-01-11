import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();
const PORT = 8000;

// to get the body of the API request 
app.use(bodyParser.json({ extented:true }));
// to secure and handle the space in url to secure from errors
app.use(bodyParser.urlencoded({ extended:true }));
// when we use two different servers we need to add cros authentication 
app.use(cors());
// use Routes to get the current route of the API
app.use('/', Routes);

Connection();
app.listen(PORT, ()=>console.log(`Server is running successfully on PORT ${PORT}`));