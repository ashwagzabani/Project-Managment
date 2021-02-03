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

  getAllProjectTasks = () => {
    axios
      .get(`${API_URL}/tasks/project/${this.state.projectId}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ allProjectTasksDetails: res.data });
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
    // return (<td>this.state.memberDetails.userName</td>)
  };
  render() {
    const toupdate = <UpdateTask />;
    const todelete = <DeleteTask />;

    const allProjectTasksDetails = this.state.allProjectTasksDetails;
    const allMemberTasks =
      allProjectTasksDetails.length === 0
        ? ""
        : allProjectTasksDetails.map((task, index) => {
          if (task.userId === this.state.userId) {
            console.log(task.title);
            return <p>{task.title}</p>;
          }
        });

    const retorninfo = this.props.isupdate
        ? <UpdateTask taskId = {this.state.allProjectTasksDetails.taskId}/>
      : this.props.isDelete
        ? <DeleteTask taskId = {this.state.allProjectTasksDetails.taskId}/>
        : { allMemberTasks };
    return (
      <div>
        {allMemberTasks}
      </div>
    );
  }
}

export default Tasks;
