const express = require("express");
const dotenv = require("dotenv");
const dbConnection =require('./config/database')
const userRoute=require('./routes/user.route');
const authRoute=require('./routes/auth.route');

//app
dotenv.config();
const app = express();
//dp connection
app.use(express.json());
dbConnection();
//routes
app.use('/api/user',userRoute);
app.use('/api/auth',authRoute)

app.listen(3001, () => {
  console.log("server is runningg!!");
});
