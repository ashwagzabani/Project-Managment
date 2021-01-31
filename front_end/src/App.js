import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
export default class App extends Component {

  constructor() {
    super();
    //signUp faild
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <div >
          <Sidebar />
        </div>
      </div>
    );
  }
}
