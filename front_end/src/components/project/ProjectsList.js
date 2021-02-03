import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";
import { BrowserRouter as Router, Route, Swich, Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import TaskProgressBar from "../Task/TaskProgressBar";

class ProjectsList extends Component {
  constructor(props) {
    super();
    this.state = {
      projecs_list: [],
      userId: props.userId,
    };

    // this.getProjectDetails = this.getProjectDetails.bind(this)
  }
  componentDidMount = () => {
    this.getAllProject();
  };
  getAllProject = () => {
    axios
      .get(`${API_URL}/user/projects/${this.state.userId}`)
      .then((res) => {
        this.setState({ projecs_list: res.data });
        console.log(res);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  getProjectDetails = (projectId) => {
    return <ProjectDetails projectId={projectId} />;
  };
  render() {
    console.log(this.state.projecs_list);
    const showAllProjectsList = this.state.projecs_list.map((projects) => {
      console.log(projects._id);
      return (
        <div  >
          <p>
            {" "}
            <Link
              to={{
                pathname: `/project/details/${projects._id}`,
                state: {
                  projectDetils: projects,
                  userLoggedInId: this.state.userId,
                },
              }}
              className="projectList cardlist"
              onClick={() => this.getProjectDetails(projects._id)}
            >
              {" "}
              <p className="title">{projects.title}</p>
              <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
              </div>{" "}
              {/* <div class="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle class="stroke" cx="60" cy="60" r="50" />
                </svg>
              </div> */}
            </Link>
          </p>
        </div>
      );
    });
    return <div className="ProjectsList">{showAllProjectsList}</div>;
  }
}

export default ProjectsList;
