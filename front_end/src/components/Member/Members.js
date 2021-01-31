import React, { Component } from 'react';
import axios from 'axios'
import API_URL from "../../apiConfig";

class Members extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: props.userId,
            memberDetails: {},
            managerId : ''
        }
    }

    componentDidMount() {
        this.getAllmembers(this.state.userId);
    }
    getAllmembers = (userId) => {
        axios
            .get(`${API_URL}/member/${userId}`)
            .then((res) => {
                this.setState({ memberDetails: res.data });
            })
            .catch((error) => {
                console.log("ERROR:", error);
            });
        // return (<td>this.state.memberDetails.userName</td>)
    }
    // getMemberDetails = (userId) => {
    //     let userName = '';
    //     this.state.memberDetails.map(member => {
    //         if (member._id === userId) {
    //             userName = member.userName;
    //         }
    //         // console.log(member._id == userId);
    //     });
    //     return userName;
    // }

    render() {
        // console.log(this.state.memberDetails);
        return (
            <div className="Members">
                <td>{this.state.memberDetails.userName}</td>
            </div>
        );
    }
}

export default Members;
