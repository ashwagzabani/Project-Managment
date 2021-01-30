import React, { Component } from 'react';
import axios from 'axios'
import API_URL from "../../apiConfig";

class UpdateProject extends Component {
    constructor() {
        super();
        this.state = {
            projecs_list: [],
            fakeprojectid: "6012b3214e50811ab09cc48b",
            userId: '60115b690ba0311c388c9aa8',
            projectTitle: "test from front end",
            projectStartDate: "2021-01-30",
            projectEndDate: "2021-01-30"
        }
    }
    componentDidMount() {
        this.readAllProjects();
    }

    readAllProjects = () => {
        axios.get(`${API_URL}/projects/6011b5dcd2af381b2c6a09b6`)
            .then(res => {
                console.log('Response Data:', res.data)
                this.setState({ projecs_list: res.data })
            })
            .catch(error => {
                console.log("ERROR:", error);
            })
    }

    getChangeData = (event) => {
        let fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value
        })
    }

    saveChnages = (event) => {
        event.preventDefault();
        const newData = {
            "title": this.state.projectTitle,
            "startDate": this.state.projectStartDate,
            "endDate": this.state.projectEndDate
        };
        axios.patch(`${API_URL}/project/6011b5dcd2af381b2c6a09b6`, newData)
            .then(res => {
                console.log('Response Data:', res.data)
                this.setState({ projecs_list: res.data })
            })
            .catch(error => {
                console.log("ERROR:", error);
            })
    }

    render() {
        console.log(this.state.projecs_list);
        // const showAllProjectsList = this.state.projecs_list.map(projects => {
        //     <li>projects</li>
        //     console.log(projects);
        // })
        return (
            <div className="UpdateProject">
                <form onSubmit={this.saveChnages}>
                    <fieldset>
                        <label>Update Project Details</label>
                        <div class="form-group">
                            <label>Project title</label>
                            <input type="text" name="projectTitle" class="form-control" defaultValue={this.state.projectTitle} onChange={this.getChangeData} />
                        </div>
                        <div class="form-group">
                            <label>Start Date</label>
                            <input type="date" name="projectStartDate" class="form-control" defaultValue={this.state.projectEndDate} onChange={this.getChangeData} />
                        </div>
                        <div class="form-group">
                            <label>End Date</label>
                            <input type="date" class="form-control" name="projectEndDate" defaultValue={this.state.projectEndDate} onChange={this.getChangeData} />
                        </div>
                        <button className="btn btn-default">Cancel</button>
                        <button type="submit" className="btn btn-success" >Save</button>
                    </fieldset>
                </form>
            </div >
        );
    }
}

export default UpdateProject;
