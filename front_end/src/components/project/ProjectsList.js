import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";
import { BrowserRouter as Router, Route, Swich, Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
class ProjectsList extends Component {
  constructor() {
    super();
    this.state = {
      projecs_list: [],
      userId: "60115b690ba0311c388c9aa5",
    };
    // this.getProjectDetails = this.getProjectDetails.bind(this)
  }
  componentDidMount = () => {
    this.getAllProject();
  };
  getAllProject = () => {
    axios
      .get(`${API_URL}/projects/${this.state.userId}`)
      .then((res) => {
        this.setState({ projecs_list: res.data });
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };
  getProjectDetails = (projectId) => {
    return <ProjectDetails projectId={projectId} />;
  };
  render() {
    // console.log(this.state.projecs_list);
    const showAllProjectsList = this.state.projecs_list.map((projects) => {
      console.log(projects._id);
      return (
        <div className="projectList">
          <p>
            <Link
              to={{
                pathname: "/project/details",
                state: { projectId: projects._id, members: projects.members },
              }}
              onClick={() => this.getProjectDetails(projects._id)}
            >
              {projects.title}
            </Link>
          </p>
          {/* {proresspar} */}
        </div>
      );
    });
    return <div className="ProjectsList">{showAllProjectsList}</div>;
  }
}
export default ProjectsList;