// Require necessary NPM packages

const express = require("express");
const projects = require("../../models/Projects.js");
const Users = require("../../models/Users.js");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

//this user has two project: one as team member and another as manager his name: 'Najed'
const userId = '60115b690ba0311c388c9aa8';
/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /projects
 * Description: Get the user's projects as manager or member
 */
<<<<<<< HEAD:back_end/routes/Projects.js
router.get('/projects/:id', (req, res) => {
    projects.find({
        //get user's projects
        // { "members.userId": userId },

        //get user's projects with role === '...'
        //        members: { $elemMatch: { userId: userId, role: 'manager' } }},
        members: { $elemMatch: { userId: userId } }
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
router.get("/projects", (req, res) => {
=======
router.get("/projects/:id", (req, res) => {
>>>>>>> 04f582328be442766ee4b3ce0fdac1f53bbe19da:back_end/routes/project/Projects.js
  projects.find(
    {
      //get user's projects
      "members.userId": req.params.id,
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

<<<<<<< HEAD:back_end/routes/Projects.js
router.get('/projects/:id/:role', (req, res) => {
    projects.find({
        //get user's projects
        // { "members.userId": userId },

        //get user's projects with role === '...'
               members: { $elemMatch: { userId: req.params.role, role: req.params.role }},
        // members: { $elemMatch: { userId: userId } }
    },
        // user.findById({ "_id": userId },
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.json(result);
            console.log(result)
        });
=======
router.get("/projects/:id/:role", (req, res) => {
  projects.find(
    {
      //get user's projects with role === '...'
      members: { $elemMatch: { userId: req.params.id, role: "manager" } },
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
>>>>>>> 04f582328be442766ee4b3ce0fdac1f53bbe19da:back_end/routes/project/Projects.js
});

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

// Export the Router so we can use it in the server.js file
module.exports = router;
