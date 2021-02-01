import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Members from "../Member/Members";
import "font-awesome/css/font-awesome.min.css";
import "../../App.css";
import { BrowserRouter as Link } from "react-router-dom";
class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //projecs_list
      projecsDetails: {},
      memberDetails: [props.location.state.members],
      projecsId: props.location.state.projectId,
      userLoggedInId: "60115b690ba0311c388c9aa8",
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
        // this.setState({ memberDetails: res.data });
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
    // return (<td>this.state.memberDetails.userName</td>)
  };

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
  getProjectById = () => {
    // axios
    //   .get(`${API_URL}/project/${this.state.projecsId}`)
    //   .then((res) => {
    //     this.setState({ projecsDetails: res.data[0] });
    //   })
    //   .catch((error) => {
    //     console.log("ERROR:", error);
    //   });
  };

  deleteMember = (index) => {
    console.log(index);
    // axios
    //     .get(`${API_URL}/projects/${this.state.projecsId}`)
    //     .then((res) => {
    //         this.setState({ projecsDetails: res.data });
    //     })
    //     .catch((error) => {
    //         console.log("ERROR:", error);
    //     });
  };

  render() {
    // const { id } = this.props.match.params
    // console.log(this.props.location.state.projectId);
    // const Photo = ({ location }) => {
    //     const { state = {} } = location;
    //     const { projecsId } = state;
    //     console.log(projecsId);
    // }

    // console.log(Photo());
    const getDetails = this.state.projecsDetails.members;
    // console.log(getDetails);
    const showAllProjectsDetails =
      getDetails !== undefined
        ? getDetails.length !== 0
          ? getDetails.map((member) => {
              // console.log(this.getMemberDetails(member.userId));
              return (
                <tr>
                  {member.userId === this.state.userLoggedInId &&
                  member.role === "manager" ? (
                    <td>Your Tasks</td>
                  ) : (
                    <Members userId={member.userId} />
                  )}
                  <td>{this.state.projecsDetails.title}</td>
                  <td>{this.state.projecsDetails.title}</td>
                  <td onClick={() => this.deleteMember(member.userId)}>
                    <i className="fa fa-trash-alt">
                      <a href="#">delete</a>
                    </i>
                  </td>
                  {/* <p>member: {projects.members.length}</p> */}
                  {/* <p>{ task}</p> */}
                  {/* {proresspar} */}
                </tr>
              );
            })
          : ""
        : "";
    console.log("data response: ", this.state.projecsDetails.startDate);
    console.log("data response: ", this.state.projecsDetails);
    // const datas = typeof this.state.projecsDetails.startDate;
    // console.log("data response: ", datas);
    // console.log("date ", dateFormat(this.state.projecsDetails.endDate, 'yyyy-MM-dd'));
    // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today));
    // var dd = String(this.state.projecsDetails.startDate.getDate()).padStart(2, '0');
    // console.log(dd);
    var startDate = new Date(this.state.projecsDetails.startDate);
    var dd = String(startDate.getDate() + 1).padStart(2, "0");
    var mm = String(startDate.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = startDate.getFullYear();

    startDate = yyyy + "-" + mm + "-" + dd;
    console.log(startDate);

    var endtDate = new Date(this.state.projecsDetails.endDate);
    var dd = String(endtDate.getDate() + 1).padStart(2, "0");
    var mm = String(endtDate.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = endtDate.getFullYear();

    endtDate = yyyy + "-" + mm + "-" + dd;
    console.log(endtDate);
    // const startDate = dates;
    // const startDate = moment(this.state.projecsDetails.startDate).format("YYYY-MM-DD").toString()
    // console.log("data with moment library: ", startDate);
    // const endtDate = dateFormat(this.state.projecsDetails.endDate, 'yyyy-mm-dd').toString()
    // console.log(date);
    // console.log(startDate);
    // return getYear.getFullYear();

    console.log(this.state.memberDetails);
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <span>{this.state.projecsDetails.title}</span>
            <Link
              to={{
                pathname: "/project/update",
                state: {
                  id: this.state.projecsDetails._id,
                  title: this.state.projecsDetails.title,
                  startDate: startDate,
                  endDate: endtDate,
                },
              }}
            >
              <i className="fa fa-edit"></i>
            </Link>
          </div>
          <div className="card-body">
            {/* <p>{this.state.projecsDetails.startDate}</p> */}
            <p>Start Date: {startDate}</p>
            <p>End Date: {endtDate}</p>
            {/* <i onClick={this.editProjectDetails}>edit</i> */}

            <table className="table">
              <tr>
                <th>Team Members</th>
                <th>Tasks</th>
                <th>status</th>
                <th></th>
              </tr>
              {showAllProjectsDetails}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
