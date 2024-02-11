const express = require("express");
const { signUp,signIn,google} = require("../controllers/auth.controller");
const router = express.Router();
router.post("/signup", signUp);
router.post('/login',signIn);
router.post('/google',google);

module.exports = router;
