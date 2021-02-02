// Require necessary NPM packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Require DB Configuration File
const db_url = require("./db");
const projects = require("./models/Projects");
const users = require("./models/Users.js");

// const indexRouter = require('./routes/index');
const projectRouter = require("./routes/project/Projects");
const newProjectRouter = require("./routes/project/NewProject");
const updateProjectRouter = require("./routes/project/UpdateProject");
const membersInProjectRouter = require("./routes/project/Members");
const deleteProjectRouter = require("./routes/project/DeleteProject");
const addNewMember = require("./routes/project/AddNewMember");
const userRouter = require("./routes/user/users");

const loginRouter = require("./routes/login");
const signUpRouter = require("./routes/SignUp");

//Task Router
const NewTaskRouter = require("./routes/task/NewTask");
const TasksRouter = require("./routes/task/Tasks");
const updateTasksRouter = require("./routes/task/UpdateTask");
const deleteTaskRouter = require("./routes/task/DeleteTasks");

// const addNewMember = require("./routes/AddNewMember");
//mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});

// Establish Database Connection
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });
// Instantiate Express Application Object
const app = express();
app.get("/", (req, res) => {
  console.log("get /");
  users.find({}, (err, result) => {
    // console.log(res);
    res.json(result);
  });
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
// app.use(indexRouter);
app.use(loginRouter);
app.use(newProjectRouter);
app.use(membersInProjectRouter);
app.use(projectRouter);
app.use(signUpRouter);
app.use(updateProjectRouter);
app.use(deleteProjectRouter);
app.use(addNewMember);
//Task imorted routers
app.use(NewTaskRouter);
app.use(TasksRouter);
app.use(updateTasksRouter);
app.use(deleteTaskRouter);
app.use(userRouter);

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
