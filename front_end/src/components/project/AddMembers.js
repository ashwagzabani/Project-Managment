import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Sidebar from "../Sidebar.js";
import Apiconfig from '../../ApiConfig'
export default class AddMembers extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            member: {},
            projectName:''
        }
    }
    //Add user into Project
    AddUser = (e) => {
        /*The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.*/
        // e.preventDefault()
        // let copyMembers = [...this.state.members]
        // axios.post(`${Apiconfig}/userss`, this.state.userName).then((res) => {
        //     if (res.data === 'Already Exist') {
        //         console.log('Email:', this.state.userName)
        //         alert(this.state.userName + 'added successfully')
        //         copyMembers.push(this.state.userName)
        //         this.setState({ members: copyMembers })
        //     }
        //     else {
        //         alert(this.state.userName + ' Error! invalid emai')
        //     }
        // });
        
    }
    //updateProject
    updateProject = () => {
        axios.put(`${Apiconfig}/addMembers/${this.state.title}`, { members: this.state.members }).then((res) => {
            console.log(res)
            console.log(res.body)
        })
    }
    render() {
        let allMembers = this.state.members.map((member) => {
            return <td>member</td>

        });
        return (
            <div>
                <form onSubmit={this.AddUser}>

                  <h2>Project</h2>


                    <h4>Add Project Team</h4>

                    <label for="ProjectName">Project Name:</label>
                    <input type="text" onChange={(e) => {
                        this.setState({
                           projectName: e.target.value,
                        });
                    }} value={this.state.projectName} />


                    <label for="addUser">User Email:</label>
                    <input type="email" onChange={(e) => {
                        this.setState({
                            userName: e.target.value,
                        });
                    }} value={this.state.userName} />

                    <input
                        type="submit"
                        className="btn btn-danger btn-black"
                        value="check user"
                    />



                </form>
                <table>
                    <tr>
                        <td>{allMembers}</td>
                    </tr>
                </table>
                <input
                    type="submit"
                    className="btn btn-danger btn-black"
                    value="Add Team Members" onClick={this.updateProject}
                />
            </div>
        )
    }
}
