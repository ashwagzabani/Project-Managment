
/*
-the input email and password 
-searching for the input in the database
-if it exists in the database, set islogged to true 
-if it doesnt, show message 'user does not exist'
*/
const express = require('express');
const router = express.Router();
const User= require('../models/Users');

router.post("/login", async (req, res) => {
  const loginInfo = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    let user = await User.findOne({ email: loginInfo.email });
    if (user) {
      let isPasswordCorrect = loginInfo.password===user.password?true:false;
      if (isPasswordCorrect) {
        return res.status(200).json({ success: "Login successful!", token });
      } else {
        throw "Email does not exist or password is incorrect";
      }
    } else {
      throw "Email does not exist or password is incorrect";
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

  // Export the Router so we can use it in the server.js file
  module.exports = router;