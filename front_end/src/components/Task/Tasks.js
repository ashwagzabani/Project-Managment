import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";
import UpdateTask from "./UpdateTask";
import DeleteTask from "./DeleteTask";
class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectId: props.projectId,
      userId: props.userId,
      allProjectTasksDetails: [],
    };
  }
  componentDidMount = () => {
    this.getAllProjectTasks();
  };
  toUpdate = (update) => {
    const allTasks = update.map((update) => {
      const allProjectTasksDetails = this.state.allProjectTasksDetails;
      update.isUpdate = true;
      allProjectTasksDetails.push(update);
      this.setState({ allProjectTasksDetails });
    });
    console.log(this.state.allProjectTasksDetails);
  };
  getAllProjectTasks = () => {
    axios
      .get(`${API_URL}/tasks/project/${this.state.projectId}`)
      .then((res) => {
        // this.toUpdate(res.data);
        // console.log(res.data);
        // this.setState({ allProjectTasksDetails: res.data });
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
    // return (<td>this.state.memberDetails.userName</td>)
  };
  render() {
    const allProjectTasksDetails = this.state.allProjectTasksDetails;
    const allMemberTasks = "";

    const retorninfo = this.props.isDelete ? (
      <DeleteTask taskId={this.state.allProjectTasksDetails.taskId} />
    ) : allProjectTasksDetails.length === 0 ? (
      ""
    ) : (
      this.state.allProjectTasksDetails.map((task, index) => {
        if (task.isUpdate === true) {
          <UpdateTask taskId={this.state.allProjectTasksDetails.taskId} />;
        } else if (task.userId === this.state.userId) {
          console.log(task.title);
          return <p>{task.title}</p>;
        }
      })
    );
    return <div>{retorninfo}</div>;
  }
}

export default Tasks;
