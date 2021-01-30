import React, { Component } from "react";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";

export default class App extends Component {

  render() {
    return (
      <Sidebar/>
=======
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
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
>>>>>>> 94e04cd169d26c0770ec29d2b6e113b8947f8589
    );
  }
}
