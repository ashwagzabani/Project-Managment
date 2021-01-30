import React, { Component } from "react";
import { BrowserRouter as Router, Route, Swich, Link } from "react-router-dom";
import Home from "./Home";
import CreateNewProject from "./project/CreateNewProject";
import ProjectsList from "./project/ProjectsList";
import UpdateProject from "./project/UpdateProject";
export default class Sidebar extends Component {
  render() {
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
      }
      // ,{
      //   path: "/project/new",
      //   exact: true,
      //   sidebar: () => <div></div>,
      //   main: () => <CreateNewProject />,
      // }
    ];

    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div className="nav">
            <header>project managment</header>
            <ul>
              <li className="fas fa-home">
                <Link to="/">Home</Link>
                <Link to="/Sign Up">Sign Up</Link>
                <Link to="/Log In">Sign Up</Link>

              </li>
              <li className="fas fa-home">
                <Link to="/project/update">Projects</Link>
              </li>
            </ul>

            <switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </switch>
          </div>

          <div className="main"></div>

          <switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </switch>
        </div>
      </Router>
    );
  }
}
