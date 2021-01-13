//importing configs
const express = require('express');
require('dotenv').config();
require('./database'); //starting db

//create instance of express
const app = express();

//converting data received from request to object/json.
app.use(express.json());

//importing the router and using in the controller main
app.use('/', require('./routers/index'));

//server start
app.listen(process.env.SERVER_PORT, console.log(`Server running in the port ${process.env.SERVER_PORT}`));