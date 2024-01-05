const bcrypt = require("bcryptjs");
const {apiError}  = require("../utiles/apiError");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    delete user._doc.password;
    res.status(201).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("hello");
  try {
    console.log("1");
    const testUser = await User.findOne({ email });
    console.log("2");
    if (!testUser) return next(apiError(404, "InValid username,password"));
    console.log("object");
    const testPassword = await bcrypt.compare(password, testUser.password);
    if (!testPassword) return next(apiError(401, "InValid username,password"));
    console.log("1111");
    const token = jwt.sign({ id: testUser.id }, process.env.secretJwt);
    delete testUser._doc.password;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ user: testUser });
  } catch (e) {
    next(e);
  }
};
