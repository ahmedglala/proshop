const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  username:{required:true,unique:[true,'must eb unique'],type:String,},
  email:{required:true,unique:[true,'must eb unique'],type:String,},
  password:{type:String,required:true},
  avatar:{type:String,default:'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg'}
},{timestamps:true})
module.exports=mongoose.model('User',userSchema);