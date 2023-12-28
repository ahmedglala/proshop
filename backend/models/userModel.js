const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  username:{required:true,unique:[true,'must eb unique'],type:String,},
  email:{required:true,unique:[true,'must eb unique'],type:String,},
  password:{type:String,required:true}
},{timestamps:true})
module.exports=mongoose.model('User',userSchema);