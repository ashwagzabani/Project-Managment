import React, { Component } from 'react';
import axios from 'axios'

class ProjectsList extends Component {
    constructor() {
        super();
        this.state = {
            projecs_list: []
        }
    }
    componentDidMount = () => {
        axios.get('http://localhost:5000/projects')
            .then(res => {
                console.log('Response Data:', res.data)
                this.setState({ projecs_list: res.data })
            })
            .catch(error => {
                console.log("ERROR:", error);
            })
    }
    render() {
        const showAllProjectsList = this.state.projecs_list.map(projects => {
            <li>projects</li>
        })
        return (
            <div className="ProjectsList">
                <ul>
                    {this.showAllProjectsList}
                </ul>
            </div>
        );
    }
}

export default ProjectsList;
