// Require necessary NPM packages
const express = require("express");
const projects = require("../models/Projects.js");
const Users = require("../models/Users.js");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

//this user has two project: one as team member and another as manager his name: 'Najed'
const userId = "6012b20254cb2f31685b14a4";

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /projects
 * Description: Get the user's projects as manager or member
 */
router.get("/projects", (req, res) => {
  projects.find(
    {
      //get user's projects
        //  "members.userId": userId
        // members: { $elemMatch: { userId: userId } },
    },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
      console.log(result);
    }
  );
});

<<<<<<< HEAD

router.get('/projects/:id/:role', (req, res) => {
    projects.find({
        //get user's projects
        // { "members.userId": userId },

        //get user's projects with role === '...'
        members: { $elemMatch: { userId: req.params.id, role: "manager" } },
        // members: { $elemMatch: { userId: userId } }
=======
router.get("/projects/:id/:role", (req, res) => {
  projects.find(
    {
      //get user's projects
      // { "members.userId": userId },

      //get user's projects with role === '...'
      members: {
        $elemMatch: { userId: req.params.role, role: req.params.role },
      },
      // members: { $elemMatch: { userId: userId } }
>>>>>>> 94e04cd169d26c0770ec29d2b6e113b8947f8589
    },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
      console.log(result);
    }
  );
});

<<<<<<< HEAD


//User.findOne({'local.rooms': {$elemMatch: {name: req.body.username}}}, function (err, user) {


// router.post('/signIn', (req, res) => {
//     users.create(req.body)
//     users.find({}, (err, result) => {
//         if (err) {
//             res.json("error :(")
//         }
//         res.json(result);
//     })
// });

=======
>>>>>>> 94e04cd169d26c0770ec29d2b6e113b8947f8589
// Export the Router so we can use it in the server.js file
module.exports = router;
