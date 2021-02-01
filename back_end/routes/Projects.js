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

router.get('/projects/:id/:role', (req, res) => {
  projects.find({
    //get user's projects
    // { "members.userId": userId },

    //get user's projects with role === '...'
    members: { $elemMatch: { userId: req.params.id, role: "manager" } }
  },
    // members: { $elemMatch: { userId: userId } }
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
      console.log(result);
    }
  );
});


/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /projects
 * Description: Get the user's projects as manager or member
 */
router.get('/projects/:id', (req, res) => {
  projects.find({
    //get user's projects
    // { "members.userId": userId },

    //get user's projects with role === '...'
    //        members: { $elemMatch: { userId: userId, role: 'manager' } }},
    members: { $elemMatch: { userId: req.params.id } }
  },
    // user.findById({ "_id": userId },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
      console.log(result)
    });
});
router.get("/projects/:id/:role", (req, res) => {
  projects.find(
    {
      //get user's projects
      // { "members.userId": userId },

      //get user's projects with role === '...'
      // members: { $elemMatch: { userId: req.params.id, role: "manager" } },      members: {
      $elemMatch: { userId: req.params.id, role: req.params.role }
    },
    // members: { $elemMatch: { userId: userId } }
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
      console.log(result);
    }
  );
});


router.get("/projects/:projectId", (req, res) => {
  projects.findOne({ "_id": req.params.projectId },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
      console.log(result);
    }
  );
});
// Export the Router so we can use it in the server.js file
module.exports = router;
