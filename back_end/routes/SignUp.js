const express = require('express');

const users = require('../models/Users.js')
//you see this file and the project folder?

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
users.create()
/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Get the Root Route
 */
//SignUp request to create a user dependent in schema
router.post('/signUp', async (req, res) => {
  console.log('/signUp');
  //to add new user into DB
  const signedUpUser = new users({
    //cheack in post man ---DONE
    //userName field grap the user name from the body request which  mean the user name that write it by user in input form
    userName: req.registered.userName,
    //grap the email that user enter in body req (when the user enter into submit)
    email: req.body.email,
    //grap the email that user enter in body req (when the user enter into submit)
    password: req.body.password
  });
  let userExisit = await verifyUser(req)
  if (userExisit) {
    //prevent
    res.send('Already Exist')   //to go outside function
    return;
  }
  //we need to save it
  signedUpUser.save()
    .then(data => {
      res.json(data)
    }).catch(error => {
      res.json(error)
    })
})
async function verifyUser(req) {
  try {
    const userExisit = await users.findOne({ email: req.body.email })
    return userExisit;
    // next();
  } catch (error) {
    //handle exceptions here
  }
}
// Export the Router so we can use it in the server.js file
module.exports = {router, verifyUser};
