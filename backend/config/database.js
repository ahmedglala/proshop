const mongoose = require("mongoose");
const dbConnection=()=>{
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("database connection");
  })
  .catch((e) => {
    console.log(e);
  });
}
module.exports=dbConnection