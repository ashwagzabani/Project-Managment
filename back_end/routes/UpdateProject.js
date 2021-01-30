// Require necessary NPM packages
const express = require('express');
const projects = require('../models/Projects.js')

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
const fakeprojectid = "6011b5dcd2af381b2c6a09b6";
/**
 * Action:      UPDATE
 * Method:      PATCH
 * URI:         /project/id/
 * Description: Update an esisting project status, Date and/or title
 */
router.patch('/project/:id', (req, res) => {

    projects.findByIdAndUpdate({ "_id": req.params.id }, req.body, (error, result) => {
        if (error) {
            console.log(error);
        }
        console.log(req.body);
        res.json(result);
    })
});

// Export the Router so we can use it in the server.js file
module.exports = router;
