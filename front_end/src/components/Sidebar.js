import React, { Component } from "react";
import { BrowserRouter as Router, Route, Swich, Link } from "react-router-dom";
import Home from "./Home";
export default class Sidebar extends Component {
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <Home isAuthed={true} />,
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
