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
        axios.get(`http://localhost:5000/projectsList/${this.state.userId}`)
            .then(res => {
                console.log('Response Data:', res.data)
                this.setState({ projecs_list: res.data })
            })
            .catch(error => {
                console.log("ERROR:", error);
            })
    }

    readAllProjects = () => {
        // axios.get('http://localhost:5000/projects')
        //     .then(res => {
        //         console.log('Response Data:', res.data)
        //         this.setState({ projecs_list: res.data })
        //     })
        //     .catch(error => {
        //         console.log("ERROR:", error);
        //     })
    }
    render() {
        console.log(this.state.projecs_list);
        const showAllProjectsList = this.state.projecs_list.map(projects => {
            <li>projects</li>
            console.log(projects);
        })
        return (
            <div className="UpdateProject">
                <ul>

                    {showAllProjectsList}
                </ul>
            </div>
        );
    }
}

export default UpdateProject;
