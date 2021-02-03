import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Apiconfig from "../../ApiConfig";
import Members from "../Member/Members";

export default class CreateNewTask extends Component {
  constructor(props) {
    super();
    //projects
    this.state = {
      title: "",
      projectId: props.projectId,
      userId: props.teamMember[0].userId,
      status: false,
      redirect: false,
    };
  }
  componentDidMount = () => {};
  //create new task
  newTask = () => {
    // e.preventDefault();
    if (this.state.title === "") {
      return <label className="err">please inpute the Task </label>;
    }
    // if (this.state.userId === "") {
    //   return <label className="err">please select the member </label>;
    // }else
    {
      axios.post(`${Apiconfig}/project/tasks`, this.state).then((res) => {
        console.log("Task Data:", this.state);
      });
    }
  };
  handleChange = (e) => {
    this.setState({ userId: e.target.value });
  };

  render() {
    // if (this.state.redirect) {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: `/project/details/${this.state.projectid}`,
    //         state: { projectDetils: this.state.newData },
    //       }}
    //     />
    //   );
    // }


    console.log(this.props.teamMember);
    return (
      <div>
        <div className="container">
          {/* action="/action_page.php" */}
          <form onSubmit={this.newTask}>
            <fieldset>
              <legend>Add Task:</legend>
              <label>Task Title </label> {"  "}
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
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
