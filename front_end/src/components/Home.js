import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import CreateNewproject from "./project/CreateNewproject";
import ProjectsList from "./project/ProjectsList";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>welcome</h1>
        <Link to="/newProject">New Project</Link>
        <ProjectsList />
      </div>
    );
  }
}
