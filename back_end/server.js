// Require necessary NPM packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


//test code -------------------------------
const users = require('./models/Users')
const { usersData, projectsData } = require('./models/SeedData');
//test code -------------------------------

// Require Route Files
const indexRouter = require('./routes/index');
const projectRouter = require('./routes/Projects');
const newProjectRouter = require('./routes/NewProject');


// Require DB Configuration File
const db_url = require('./db');
const projects = require('./models/Projects');

// Require User Files
const users = require('./models/Users.js');

//mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});

// Establish Database Connection

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Connected to Mongo');
  // projects.create(projectsData, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result);
  //   }
  // });
  // console.log(projectsData[0].members);

});

// Instantiate Express Application Object
const app = express();

app.get('/', (req, res) => {
  console.log('get /');
  users.find({}, (err, result) => {
    // console.log(res);
    res.json(result)
  })
  // res.json('result');
});

/*** Middleware ***/
//
// Add `bodyParser` middleware which will parse JSON requests
// into JS objects before they reach the route files.
//
// The method `.use` sets up middleware for the Express application
app.use(express.json());

const reactPort = 3000;
// Set CORS headers on response from this API using the `cors` NPM package.
app.use(
  cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
);

/*** Routes ***/

// Mount imported Routers
app.use(indexRouter);

app.use(newProjectRouter);
// app.use('/',indexRouter);
app.use(projectRouter);


/*** Routes ***/
// Define PORT for the API to run on
const PORT = process.env.PORT || 5000;

// Start the server to listen for requests on a given port
app.listen(PORT, () => {
  console.log(`project_managment  => http://localhost:${PORT}`);
});

/*
  C.R.U.D - Actions Table

  Create          CREATE
  Read
    Read All      INDEX
    Read By ID    SHOW
  Update          UPDATE
  Delete          DESTROY
*/



//---------------------------------------------------

