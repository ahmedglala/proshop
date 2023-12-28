const express = require("express");
const dotenv = require("dotenv");
const dbConnection =require('./config/database')
const userRoute=require('./routes/user.route');
const authRoute=require('./routes/auth.route');
const { errorHandler } = require("./middlewares/errorHandler");
// const errorHandler=require('./middlewares/errorHandler');
//app
dotenv.config();
const app = express();
//dp connection
app.use(express.json());
dbConnection();
//routes
app.use('/api/user',userRoute);
app.use('/api/auth',authRoute)


//error middleware
app.use(errorHandler);
app.listen(3001, () => {
  console.log("server is runningg!!");
});
