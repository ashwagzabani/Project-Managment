// Require necessary NPM packages
const express = require('express');
const projects = require('../../models/Projects.js')
const Users = require('../../models/Users.js')

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

//this user has two project: one as team member and another as manager his name: 'Najed'
const userId = '60115b690ba0311c388c9aa8';
const projectId = '6011b5dcd2af381b2c6a09b6';

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /members
 * Description: Get all members in specific project 
 */
//body syntax 
/**
 *   [
        {
            "role": "member",
            "_id": "6012b3064e0a54479c695191",
            "userId": "60115b690ba0311c388c9aa7"
        },
        {
            "role": "member",
            "_id": "6012b3064e0a54479c695192",
            "userId": "60115b690ba0311c388c9aa5"
        }
    ]
 */
//{ $push: { hates: { $each: ['alarm clocks', 'jackalopes'] } } }
// router.patch('/members/new/:id', (req, res) => {
//     Users.findOne({ userName: req.body.userName },
//         (err, result) => {
//             if (err) {
//                 console.log("the user not there ", err);
//             }
//             if (result) {
//                 console.log("the user there ", err);

//                 // console.log("the user is there", result)
//                 // projects.findByIdAndUpdate({ _id: req.params.id }, { $push: { members: { $each: req.body.members } } },
//                 //     (err, result) => {
//                 //         if (err) {
//                 //             console.log(err);
//                 //         }
//                 //         res.json({
//                 //             responseMessage: "The user is there",
//                 //             userDetails: result
//                 //         });
//                 //     });
//             } else if (result === null) {
//                 res.json("The user is not there");
//             }

//         });

//     // res.json("hii")
// });


router.patch('/members/new/:id', (req, res) => {
    projects.findByIdAndUpdate({ _id: req.params.id }, { $push: { members: req.body } },
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.json(result);
            console.log(result)
        });
    // res.json("hii")
});


router.get('/user/check/:userName', (req, res) => {
    // console.log(req.body);
    console.log(req.params.userName);
    User.findOne({ userName: req.params.userName },
        (err, result) => {
            if (err) {
                console.log("the user not there ", err);
            }

            if (result) {
                router.patch('/members/new/:id', (req, res) => {
                    projects.findByIdAndUpdate({ _id: req.params.id }, { $push: { members: result._id } },
                        (err, result) => {
                            if (err) {
                                console.log(err);
                            }
                            res.json(result);
                            console.log(result)
                        });
                    // res.json("hii")
                });
                res.json({
                    responseMessage: "The user is there",
                    userDetails: result
                });
                console.log("the user is there", result)
            } else if (result === null) {
                res.json("The user is not there");
            }

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
