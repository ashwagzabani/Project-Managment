import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Apiconfig from "../../ApiConfig";
export default class CreateNewTask extends Component {
  constructor() {
    super();
    //projects
    this.state = {
      body: {
        title: "",
        projectId: "",
        userId: "",
        status: false,
      },
      teamMember: [],
    };
  }
  //create new task
  newTask = (e) => {
    e.preventDefault();
    axios.post(`${Apiconfig}/project/new`, this.state.body).then((res) => {
      console.log("Project Data:", this.state.body);
    });
  };
  getusername = () => {
    axios.get();
  };
  render() {
    return (
      <div>
        <div className="container">
          <h4>New Task</h4>
          <form onSubmit={this.newTask}>
            <label>Task Title </label>
            <input
              type="text"
              onChange={(e) => {
                this.setState({
                  title: e.target.value,
                });
              }}
              value={this.state.title}
              className="form-control-from-group"
            />
            <br />
            <input
              type="submit"
              className="btn btn-danger btn-black"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
