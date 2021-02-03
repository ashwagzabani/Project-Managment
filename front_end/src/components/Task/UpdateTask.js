import React, { Component } from "react";
import axios from "axios";
import API_URL from "../../ApiConfig";
import Members from '../Member/Members'
class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskId: props.id,
      title: props.Title,
      userId: props.userId,
      projectId: props.projectId
    };
  }

  updateTask = (event) => {
    event.preventDefault();
    axios
      .patch(`${API_URL}/tasks/${this.state.taskId}`, this.state)
      .then((res) => {
        console.log("Response Data:", res.data);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  render() {
    console.log(this.state.projectEndDate);
    return (
      <div>
        <form onSubmit={this.updateTask}>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
            value={this.state.title}
            className="form-control-from-group"
          />
          {"  "}
          <select onChange={this.handleChange}>
            {this.props.teamMember.map((memberName) => (
              <Members
                value={memberName.userId}
                userId={memberName.userId}
                option={true}
              />
            ))}
          </select>{" "}
          {"  "}
          <input
            type="submit"
            className="btn btn-danger btn-black"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default UpdateTask;
