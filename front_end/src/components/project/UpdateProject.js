import React, { Component } from 'react';
import axios from 'axios'

class UpdateProject extends Component {
    constructor() {
        super();
        this.state = {
            projecs_list: [],
            fakeprojectid: "6011b5dcd2af381b2c6a09b6",
            userId: '60115b690ba0311c388c9aa8'
        }
    }
    componentDidMount() {
        this.readAllProjects();
        const newData = {
            "title": "update from front-end",
            "status": true
        };
        axios.patch(`http://localhost:5000/project/6012b3214e50811ab09cc48b`,newData)
            .then(res => {
                console.log('Response Data:', res.data)
                this.setState({ projecs_list: res.data })
            })
            .catch(error => {
                console.log("ERROR:", error);
            })
    }

    readAllProjects = () => {
        axios.get('http://localhost:5000/projects/60115b690ba0311c388c9aa5')
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
                <form method="POST">
                    <fieldset>
                        <label>Update Project Details</label>
                        <div class="form-group">
                            <label>Project title</label>
                            <input type="text" class="form-control" placeholder="Recipient's username" />
                        </div>
                        <div class="form-group">
                            <label>Start Date</label>
                            <input type="text" class="form-control" placeholder="Recipient's username" />
                        </div>
                        <div class="form-group">
                            <label>End Date</label>
                            <input type="text" class="form-control" placeholder="Recipient's username" />
                        </div>
                    </fieldset>
                </form>
            </div >
        );
    }
}

export default UpdateProject;
