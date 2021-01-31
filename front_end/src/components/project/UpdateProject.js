import React, { Component } from 'react';
import axios from 'axios'
import API_URL from "../../apiConfig";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class UpdateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectid: props.location.state.id,
            projectTitle: props.location.state.title,
            projectStartDate: props.location.state.startDate,
            projectEndDate: props.location.state.endDate
        }
    }

    getChangeData = (event) => {
        let fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value
        })
        console.log(this.state[fieldName]);
    }

    saveChnages = (event) => {
        event.preventDefault();
        const newData = {
            "title": this.state.projectTitle,
            "startDate": this.state.projectStartDate,
            "endDate": this.state.projectEndDate
        };
        axios.patch(`${API_URL}/project/${this.state.projectid}`, newData)
            .then(res => {
                console.log('Response Data:', res.data)
            })
            .catch(error => {
                console.log("ERROR:", error);
            })
    }

    render() {
        console.log(this.state.projectEndDate);
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
                            <input type="date" name="projectStartDate" class="form-control" defaultValue={this.state.projectStartDate} onChange={this.getChangeData} />
                        </div>
                        <div class="form-group">
                            <label>End Date</label>
                            <input type="date" class="form-control" name="projectEndDate" defaultValue={this.state.projectEndDate} onChange={this.getChangeData} />
                        </div>
                        <Link to="/" className="btn btn-default">Cancel</Link>
                        <button type="submit" className="btn btn-success" >Save</button>
                    </fieldset>
                </form>
            </div >
        );
    }
}

export default UpdateProject;
