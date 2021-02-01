import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Apiconfig from "../ApiConfig";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      userId: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
  }
  onSubmit = (event) => {
    event.preventDefault();

    const loginInfo = {
      email: this.state.email,
      password: this.state.password,
    };
    axios.post("Apiconfig", loginInfo).then((res) => {
      console.log("Response Data:", res.data);
      if (res.data === "Login successful!") {
        alert("Correct email and password");
        this.setState({ userId: res.data._id });
      }
      if (res.data === "Password is not correct") {
        alert("Wrong Password");
      }
      if (res.data === "Email does not exist") {
        alert("Email does not exist");
      }
    });
  };
  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
    console.log(this.state.email);
  };
  getPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
    console.log(this.state.password);
  };
  getData = (e) => {
    e.stopPropagation();
    this.props.loginHandler(this.state.userId);
    console.log(this.props.loginHandler(this.state.email));
  };
  render() {
    return (
      <div>
        <div className="form-div">
          <form onSubmit={this.onSubmit}>
            <h3>Sign In</h3>
            <label>Email address</label> <br />
            <input
              type="email"
              className="form-control"
              placeholder="Email "
              onChange={(e) => {
                this.getEmail(e);
              }}
              value={this.email}
              className="form-control-from-group"
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password "
              onChange={(e) => {
                this.getPassword(e);
              }}
              value={this.password}
              className="form-control-from-group"
            />
            <br />
            <br />
            <input
              type="submit"
              className="btn btn-danger btn-black"
              value="Log in"
              onClick={(e) => this.getData(e)}
            />
          </form>
        </div>
      </div>
    );
  }
}
