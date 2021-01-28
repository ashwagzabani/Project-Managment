// Require necessary NPM packages
const express = require('express');
const projects = require('../models/Projects.js')
const Users = require('../models/Users.js')

// const { use } = require('./NewTask.js');
//you see this file and the project folder?

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
//this user has two project: one as team member and another as manager his name: 'Najed'
const userId = '60115b690ba0311c388c9aa8';
/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Get the Root Route
 */

// get the user projects
router.get('/projects', (req, res) => {
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
