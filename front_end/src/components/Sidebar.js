import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";

import CreateNewProject from "./project/CreateNewProject";
import ProjectsList from "./project/ProjectsList";
import UpdateProject from "./project/UpdateProject";

import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Members from "./Member/Members";

import DeleteProject from "./project/DeletProject";
import ProjectDetails from "./project/ProjectDetails";
export default class Sidebar extends Component {
  render() {

    // <div class="dropdown-container">
    //   <a href="#">Link 1</a>
    //   <a href="#">Link 2</a>
    //   <a href="#">Link 3</a>
    // </div>;

    const routes = [
      {
        path: "/",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <Home username={this.props.username} isAuthed={true} />,
      },
      {
        path: "/project/update",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <UpdateProject />,
      },
      {
        path: "/project/list",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <DeleteProject />,
      },
      // ,{
      //   path: "/project/new",
      //   exact: true,
      //   sidebar: () => <div></div>,
      //   main: () => <CreateNewProject />,
      // }
      {
        path: "/signup",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <SignUp changeEmail={this.props.changeEmail} changepassword={this.props.changepassword} changeUserName={this.props.changeUserName} onSubmit={this.props.onSubmit}
          userName={this.props.userName} passwprd={this.props.password} email={this.props.email} />,
      },
      {
        path: "/login",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <Login />,
      }, {
        path: "/members",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <Members />,
      }, {
        path: "/project/details",
        exact: true,
        sidebar: () => <div></div>,
        main: (props) => <ProjectDetails {...props}/>,
      }
    ];

    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div className="nav">
            <header>project managment</header>
            <ul>
              <li className="fas fa-home">
                <Link to="/">Home</Link>
              </li>
              <li className="fas fa-home">
                <Link to="/project/update">Update Project</Link>
              </li>
              <li className="fas fa-home">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="fas fa-home">
                <Link to="/login">Log In</Link>
              </li>
              <li className="fas fa-home">
                <Link to="/members">Members</Link>
              </li>
              <li className="">
                <Link to="/project/list">Projects list</Link>
              </li>
            </ul>

            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>

          <div className="main"></div>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}
