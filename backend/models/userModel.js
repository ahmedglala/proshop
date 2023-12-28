const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  name:{require:true,unique:true,type:String,},
  email:{require:true,unique:true,type:String,},
  password:{type:String,require:true}
},{timestamps:true})
module.exports=mongoose.model('User',userSchema);