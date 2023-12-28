const bcrypt=require('bcryptjs');
const User=require('../models/userModel');

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
