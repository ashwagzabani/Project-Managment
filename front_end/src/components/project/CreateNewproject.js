import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Sidebar from "../Sidebar.js";
import Apiconfig from '../../Apiconfig'
export default class CreateNewproject extends Component {
    constructor() {
        super();
        //projects
        this.state = {
            title: '',
            members: '',
            role: '',
            startDate: '',
            endDate: '',
            status: '',
            userEmail: '',
            members: []

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
            alert('Project added successfully')
            console.log("Project Data:", newProject);
        });


    }
    //Add user into Project
    AddUser = (e) => {
        /*The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.*/
        e.preventDefault()
        let copyMembers = [...this.state.members]
        axios.post(`${Apiconfig}/users`, this.state.userEmail).then((res) => {
            if (res.data === 'Already Exist') {
                console.log('Email:', this.state.userEmail)
                alert(this.state.userEmail + 'added successfully')
                copyMembers.push(this.state.userEmail)
                this.setState({members:copyMembers})
            }
            else {
                alert(this.state.userEmail + ' Error! invalid emai')
            }
        });
    }

    //updateProject
    updateProject = () => {
        axios.put(`${Apiconfig}/addMembers/${this.state.title}`, {members:this.state.members}).then((res) => {
            console.log(res)
        })
    }

    render() {
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

                        <input type="date" name="start date" onChange={(e) => {
                            this.setState({
                                startDate: e.target.value,
                            });
                        }} value={this.state.startDate}
                        />

                        <label for="EndDate">End Date :</label>
                        <input type="date" name="end date" onChange={(e) => {
                            this.setState({
                                endDate: e.target.value,
                            });
                        }} value={this.state.endDate} />
                        <input
                            type="submit"
                            className="btn btn-danger btn-black"
                            value="Submit"
                        />
                    </form>
                    <form onSubmit={this.AddUser}>
                        <h4>Add Project Team</h4>

                        <label for="addUser">User Email:</label>
                        <input type="email" onChange={(e) => {
                            this.setState({
                                userEmail: e.target.value,
                            });
                        }} value={this.state.userEmail} />
                        <input
                            type="submit"
                            className="btn btn-danger btn-black"
                            value="Add"
                        />



                    </form>
                    <input
                        type="submit"
                        className="btn btn-danger btn-black"
                        value="Update Project" onClick={this.updateProject}
                    />
                </div>            </div>


        )
    }
}
