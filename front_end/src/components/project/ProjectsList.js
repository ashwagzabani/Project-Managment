import React, { Component } from "react";
import API_URL from "../../apiConfig";
import axios from "axios";

class ProjectsList extends Component {
  constructor() {
    super();
    this.state = {
      projecs_list: [],
    };
  }
  componentDidMount = () => {
    this.getAllProject();
  };
  getAllProject = () => {
    axios
      .get(`${API_URL}/projects`)
      .then((res) => {
        this.setState({ projecs_list: res.data });
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  render() {
    console.log(this.state.projecs_list);
    const showAllProjectsList = this.state.projecs_list.map((projects) => {
      return (
        <div className='projectList'>
          <p>{projects.title}</p>
          <p>member: {projects.members.length}</p>
          {/* <p>{ task}</p> */}
          {/* {proresspar} */}
        </div>
      );
    });
    return <div className="ProjectsList">{showAllProjectsList}</div>;
  }
}

export default ProjectsList;
