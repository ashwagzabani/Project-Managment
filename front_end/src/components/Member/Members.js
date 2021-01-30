import React, { Component } from 'react';
import axios from 'axios'

class Members extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectId: "6011b5dcd2af381b2c6a09b6",
            members: []
        }
    }

    componentDidMount() {
        this.membersList();
    }

    membersList = () => {
        console.log(this.state.projectId);
        axios.get(`http://localhost:5000/members/${this.state.projectId}`)
            .then(res => {
                console.log('Response Data:', res.data)
                this.setState({ members: res.data.members })
            })
            .catch(error => {
                console.log("ERROR:", error);
            })
    }

    render() {
        console.log(this.state.members);
        const members = this.state.members.map((mem) => {
            // <p>{mem}</p>
            //get all member except manager
            if (mem.role === "member")
                console.log(mem);
        })
        return (
            <div className="Members">
                {members}
            </div>
        );
    }
}

export default Members;
