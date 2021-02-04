
import React, { Component } from 'react';
import API_URL from "../../ApiConfig";
import axios from "axios";
class Tasks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectId: props.projectId,
            userId: props.userId,
            allProjectTasksDetails: []
        }
    }
    componentDidMount = () => {
        this.getAllProjectTasks();
    };

    getAllProjectTasks = () => {
        axios
            .get(`${API_URL}/tasks/project/${this.state.projectId}`)
            .then((res) => {
                console.log(res.data);
                this.setState({ allProjectTasksDetails: res.data });
            })
            .catch((error) => {
                console.log("ERROR:", error);
            });
        // return (<td>this.state.memberDetails.userName</td>)
    }
    render() {
        const allProjectTasksDetails = this.state.allProjectTasksDetails;
        const allMemberTasks = allProjectTasksDetails.length === 0 ? '' : (allProjectTasksDetails.map((task, index) => {
            if (task.userId === this.state.userId) {
                console.log(task.title);
                return (
                    <p>{task.title}</p>

                )
            }
        }));
        return (
            <div>
                {/* <p>hello</p> */}
                {allMemberTasks}
            </div>
        );
    }
}

export default Tasks;
