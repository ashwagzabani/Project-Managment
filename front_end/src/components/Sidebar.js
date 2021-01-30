import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
<<<<<<< HEAD
import CreateNewProject from "./project/CreateNewProject";
import ProjectsList from "./project/ProjectsList";
import UpdateProject from "./project/UpdateProject";
=======
import SignUp from "./SignUp.js";
import Login from "./Login.js";
>>>>>>> a946868be1e55c81862dd1e3f2bbd393f5278d70
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
<<<<<<< HEAD
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
=======
        path: "/signup",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <SignUp changeEmail={this.props.changeEmail} changepassword={this.props.changepassword} changeUserName={this.props.changeUserName} onSubmit={this.props.onSubmit}
        userName={this.props.userName} passwprd={this.props.password} email={this.props.email}/>,
      },
     {
       path: "/login",
      exact: true,
      sidebar: () => <div></div>,
      main: () => <Login />,
    },
>>>>>>> a946868be1e55c81862dd1e3f2bbd393f5278d70
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
              <li className="fas fa-home">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="fas fa-home">
                <Link to="/login">Log In</Link>
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
