import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
export default class Sidebar extends Component {
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <Home isAuthed={true} />,
      },
      {
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
