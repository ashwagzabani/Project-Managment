import React, { Component } from 'react';
import API_URL from "../../apiConfig";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class ProjectDetails extends Component {
    constructor() {
        super();
        this.state = {
            //projecs_list
            projecsDetails: [],
            memberDetails: [],
            projecsId: "6011b5dcd2af381b2c6a09b6"
        };
    }
    componentDidMount = () => {
        this.getProjectById();
        this.getAllmembers("60115b690ba0311c388c9aa0");
    };

    getAllmembers = (userId) => {
        axios
            .get(`${API_URL}/users`)
            .then((res) => {
                this.setState({ memberDetails: res.data });
            })
            .catch((error) => {
                console.log("ERROR:", error);
            });
        // return (<td>this.state.memberDetails.userName</td>)
    }

    getMemberDetails = (userId) => {
        let userName = '';
        this.state.memberDetails.map(member => {
            if (member._id === userId) {
                 userName = member.userName;
            }
            // console.log(member._id == userId);
        });
        return userName;
    }
    getProjectById = () => {
        axios
            .get(`${API_URL}/projects/${this.state.projecsId}`)
            .then((res) => {
                this.setState({ projecsDetails: res.data });
            })
            .catch((error) => {
                console.log("ERROR:", error);
            });
    };

    render() {
        console.log(this.state.projecsDetails);
        const getDetails = this.state.projecsDetails;
        const showAllProjectsList = getDetails.length !== 0 ? this.state.projecsDetails.members.map((member) => {
            console.log(this.getMemberDetails(member.userId));
            return (
                <tr>
                    <td>{this.getMemberDetails(member.userId)}</td>
                    <td>{this.state.projecsDetails.title}</td>
                    <td>{this.state.projecsDetails.title}</td>
                    {/* <p>member: {projects.members.length}</p> */}
                    {/* <p>{ task}</p> */}
                    {/* {proresspar} */}
                </tr>
            );
        }) : "";
        return (
            <div className="ProjectDetails">
                <div className="panel-default">
                    <div className="panel-heading">Panel heading</div>
                    <div className="panel-body">
                        {/* <p>...</p> */}
                    </div>

                    <table className="table">
                        <tr>
                            <th>Team Members</th>
                            <th>Tasks</th>
                            <th>status</th>
                        </tr>
                        {showAllProjectsList}
                    </table>
                </div>
            </div>
        );
    }
}

export default ProjectDetails;
