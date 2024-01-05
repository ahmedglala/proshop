const bcrypt=require('bcryptjs');
const {errorHandler}=require('../middlewares/errorHandler')
const User=require('../models/userModel');
const jwt=require('jsonwebtoken');

exports.signUp = async(req, res, next) => {
  try{
  const {username,email,password}=req.body;
  
  const hashedPassword= bcrypt.hashSync(password,10);
  const user=await User.create({username,email,password:hashedPassword});
  delete user._doc.password;
  res.status(201).json({
    data:user
  })
}
catch (err){
  next(err);
}


};

exports.signIn=async(req,res,next)=>
{
  try{
    const{email,password}=req.body;
    const testUser=await User.findOne({email});
    if(!testUser)return next(errorHandler(404,'InValid username,password'));
    console.log('object')
    const testPassword= await bcrypt.compare(password,testUser.password);
    if(!testPassword)return next(errorHnadler(401,'InValid username,password'));
    console.log('1111')
    const token=jwt.sign({id:testUser.id},process.env.secretJwt);
    delete testUser._doc.password
    res.cookie('access_token',token,{httpOnly:true}).status(201).json({user:testUser});
  }
  catch(e){next(e)}
}