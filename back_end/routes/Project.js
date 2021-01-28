// Require necessary NPM packages
const express = require('express');
const projects = require('../models/Projects.js')
//you see this file and the project folder?

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Get the Root Route
 */
router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Blogy',
    });
});


router.post('/signIn', (req, res) => {
    users.create(req.body)
    users.find({}, (err, result) => {
        if (err) {
            res.json("error :(")
        }
        res.json(result);
    })
});

router.post('/project', (req, res) => {
    // users.findById()
    projects.create(req.body)
    projects.find({}, (err, result) => {
        if (err) {
            res.json("error :(")
        }
        res.json(result);
    })
});

router.get('/test', (req, res) => {
    projects.find({}, (err, result) => {
        if (err) {
            res.json("error :(")
        }
        res.json(result);
    })

    users.find({}, (err, result) => {
        if (err) {
            res.json("error :(")
        }
        res.json(result);
    })
});


// Export the Router so we can use it in the server.js file
module.exports = router;
