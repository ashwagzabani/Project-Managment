import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
// import "./form.css";
import Form from "./components/Forms";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateNewTask from "./components/Task/CreateNewTask";
export default class App extends Component {
  constructor() {
    super();
    //signUp faild
    this.state = {
      loggedIn: true,
      userName: "",
      userId: "",
      projectList: [],
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.handelProject = this.handelProject.bind(this);
  }
  loginHandler = (Id) => {
    // const userId = this.state.userId;
    this.setState({ userId: Id });
  };
  handelProject = (lest) => {
    const projectList = this.state.projectList.slice();
    projectList.push(lest);
    this.setState({ projectList });
  };
  render() {
    return (
      <div>
        <div>{/* <Form loginHandler={this.loginHandler} /> */}</div>
        <div>
          <Sidebar
            userId={this.state.userId}
            projectList={this.handelProject}
            loginHandler={this.loginHandler}
            userId={this.state.userId}
          />
          <CreateNewTask />
        </div>
      </div>
    );
  }
}
