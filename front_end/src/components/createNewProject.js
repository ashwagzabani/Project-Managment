import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Sidebar from "./components/Sidebar";
export default class createNewProject extends Component {
    constructor() {
        super();
        //projects
        this.state = {
            title: '',
            members: '',
            role: '',
            startDate: '',
            endDate: '',
            status: ''
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
        axios.post("http://localhost:5000/new", newProject).then((res) => {
            console.log("Response Data:", res.data);
            alert('Project added successfully')
            console.log("Project Data:", newProject);
        });
    };


    render() {
        return (
            <div>
                <div className="container">
                    <h4>New Project</h4>
                    <form onSubmit={this.onSubmit(e)}>
                        <label for="ProjectName">Project Name</label>

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
                            value="Sign Up"
                        />


                        <h4>Add Project Team</h4>
                        <h5>User</h5>
                    </form>
                </div>
            </div>

        );
    }
}
