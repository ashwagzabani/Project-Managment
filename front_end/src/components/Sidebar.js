import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import ProjectsList from "./project/ProjectsList";
import UpdateProject from "./project/UpdateProject";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import CreateNewproject from "./project/CreateNewproject";
import Members from "./Member/Members";
import DeleteProject from "./project/DeletProject";
import ProjectDetails from "./project/ProjectDetails";
import AddMembers from "./Member/AddMembers";

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
        main: (props) => <Home userId={this.props.userId} isAuthed={true} />,
      },
      {
        path: "/newProject",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <CreateNewproject username={this.props.username} />,
      },
      {
        path: "/project/update",
        exact: true,
        sidebar: () => <div></div>,
        main: (props) => <UpdateProject {...props} />,
      },
      {
        path: "/project/delete",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <DeleteProject />,
      },
      {
        path: "/project/list",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <ProjectsList />,
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
        main: () => (
          <SignUp
           loginHandler={this.props.loginHandler} 
          />
        ),
      },
      {
        path: "/login",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <Login loginHandler={this.props.loginHandler} />,
      },
      {
        path: "/members",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <Members />,
      },
      {
        path: "/project/details/:id",
        exact: true,
        sidebar: () => <div></div>,
        main: (props) => <ProjectDetails {...props} />,
      },
      {
        path: "/AddMember",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <AddMembers />,
      },
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
            </ul>

            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={(props) => <route.sidebar {...props} />}
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
                children={(props) => <route.main {...props} />}
              />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}
