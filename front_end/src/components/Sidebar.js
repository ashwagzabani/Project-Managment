import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import CreateNewProject from "./project/CreateNewProject";
import ProjectsList from "./project/ProjectsList";
import UpdateProject from "./project/UpdateProject";
import DeleteProject from "./project/DeletProject";

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
