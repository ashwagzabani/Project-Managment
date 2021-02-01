import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Apiconfig from "../../ApiConfig";
export default class CreateNewproject extends Component {
  constructor() {
    super();
    //projects
    this.state = {
      title: "",
      role: "",
      startDate: "",
      endDate: "",
      status: "",
      userName: "",
      temporaryMembersList: [
        {
          userId: "",
          role: "manager",
        },
      ],
      member: "",
    };
  }
  //after user Submit the data
  onSubmit = (e) => {
    /*The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.*/
    e.preventDefault();
    //do not need to refresh the page after user submit it must be forward into home page    event.preventDefault()
    //we need to send that into back end all data from front into back end by axios
    const newProject = {
      title: this.state.title,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };
    //we need to post that data into server
    //post registered to this endPoint which back end (Schema) - to MongoDB
    axios.post(`${Apiconfig}/project/new`, newProject).then((res) => {
      alert("Project added successfully");
      console.log("Project Data:", newProject);
    });
  };
  //Add user into Project
  AddUser = (e) => {
    /*The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.*/
    e.preventDefault();
    const memberUserName = { userName: this.state.userName };
    // let copyMembers = [...this.state.members]
    axios
      .get(`${Apiconfig}/userrrr/${this.state.userName}`, memberUserName)
      .then((res) => {
        if (res.data.responseMessage === "The user is there") {
          console.log("The user data", res.data.userDetails);
          this.setState({
            member: res.data.userDetails,
          });
          // alert(this.state.userName + 'added successfully')
          // copyMembers.push(this.state.userName)
          // this.setState({ members: copyMembers })
          console.log(res.data.userDetails._id);
          // this.state.members.map(m =>{
          //     console.log(m);
          // })
        } else {
          alert(res.data);
        }
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //updateProject
  updateProject = () => {
    axios
      .put(`${Apiconfig}/addMembers/${this.state.title}`, {
        members: this.state.temporaryMembersList,
      })
      .then((res) => {
        console.log(res);
      });
  };
  AddMember = () => {
    const memebr = {
      userId: this.state.member._id,
      role: "member",
    };
    console.log("memebr", memebr);
    const temporaryMembersList = this.state.temporaryMembersList.slice();
    // console.log(typeof memebr);
    const membersIndex = temporaryMembersList.findIndex(memebr);
    console.log(membersIndex);
    membersIndex === -1
      ? temporaryMembersList.push(memebr)
      : console.log("the user already added");
    this.setState({ temporaryMembersList });

    console.log(this.state.temporaryMembersList);
  };
  render() {
    console.log(this.state.temporaryMembersList);
    return (
      <div>
        <div className="container">
          <h4>New Project</h4>
          <form onSubmit={this.onSubmit}>
            <label for="ProjectName">Project Name :</label>
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
            <label for="startDate ">Start Date :</label>
            <input
              type="date"
              name="start date"
              onChange={(e) => {
                this.setState({
                  startDate: e.target.value,
                });
              }}
              value={this.state.startDate}
            />
            <label for="EndDate">End Date :</label>
            <input
              type="date"
              name="end date"
              onChange={(e) => {
                this.setState({
                  endDate: e.target.value,
                });
              }}
              value={this.state.endDate}
            />
            <input
              type="submit"
              className="btn btn-danger btn-black"
              value="Submit"
            />
          </form>
          <form onSubmit={this.AddUser}>
            <h4>Add Project Team</h4>
            <label for="addUser">User Email:</label>
            <input
              type="text"
              onChange={(e) => {
                this.setState({
                  userName: e.target.value,
                  member: "",
                });
              }}
              value={this.state.userName}
            />
            <input
              type="submit"
              className="btn btn-danger btn-black"
              value="Add"
            />
            {this.state.member !== "" ? (
              <div>
                <span>{this.state.userName}</span>
                <input
                  className="btn btn-danger btn-black"
                  value="add"
                  onClick={this.AddMember}
                />
              </div>
            ) : null}
          </form>
          <input
            type="submit"
            className="btn btn-danger btn-black"
            value="Update Project"
            onClick={this.updateProject}
          />
        </div>
      </div>
    );
  }
}
