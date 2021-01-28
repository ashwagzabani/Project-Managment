// Require necessary NPM packages
const express = require('express');
const users = require('../models/Users.js')
const projects = require('../models/Projects.js')
const tasks = require('../models/Tasks.js')


// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Get the Root Route
 */

//------------------------------------------
//SignUp request to create a user dependent in schema
router.post('/signUp', async (req, res) => {
  res.send('send')
  console.log('/signUp')
  //to add new user into DB
  var signedUpUser = new users({
    //cheack in post man ---DONE
    //userName field grap the user name from the body request which  mean the user name that write it by user in input form
    userName: req.body.userName,
    //grap the email that user enter in body req (when the user enter into submit)
    email: req.body.email,
    //grap the email that user enter in body req (when the user enter into submit)
    password: req.body.password
  });
  
  //we need to save it 
  signedUpUser.save()
    .then(data => {
      res.json(data)
    }).catch(error => {
      res.json(error)
    })
})
// Export the Router so we can use it in the server.js file
module.exports = router;
