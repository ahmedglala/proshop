const express = require("express");
const dotenv = require("dotenv");
const dbConnection =require('./config/database')
const userRoute=require('./routes/user.route');

//app
dotenv.config();
const app = express();
//dp connection
dbConnection();
//routes
app.use('/api/user',userRoute);


app.listen(3001, () => {
  console.log("server is runningg!!");
});
