// Require necessary NPM packages
const express = require('express');
const projects = require('../models/Projects.js')
const users = require('../models/Users');
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:      CREATE
 * Method:      POST
 * URI:         /project/new
 * Description: Insert new project 
 */
router.post('/project/new', (req, res) => {
    //Miss some steps
    //1. get manager id ==> user id
    //2. set the manager role
    //3. create new project 
    projects.create(req.body, (err, result) => {
        if (err) {
            res.json("error :(")
        }
        res.json(result);
    });
    console.log("result");
});
// READ by ID
// bring the detail for specific user id
router.post('/users', (req, res) => {
    console.log('GET /user');
    // ?????? query
    users.find(req.body, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send('Already Exist')
        }
    });
});
router.put('/addMembers/:id', (req, res) => {
    console.log('/addMembers/:id', req.params.id)
    projects.findOneAndUpdate(req.params.id, req.body ,function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result)
        }
    })
});







// Export the Router so we can use it in the server.js file
module.exports = router;
