// Require necessary NPM packages
const express = require("express");
const User = require("../../models/Users.js");
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /user/:id
 * Description: Get the user's Name by user id
 */
//get all user tasks
router.get("/user/:id", (req, res) => {
  User.findById({ _id: req.params.id }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
    console.log(result);
  });
});

module.exports = router;