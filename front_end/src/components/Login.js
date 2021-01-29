import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email:"",
      password:"",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
  }
  onSubmit=(event)=>{
    event.preventDefault();

    const loginInfo={
      loginEmail:this.state.loginEmail,
      loginPassword:this.state.loginPassword
    };
    axios.post("http://localhost:5000/login",loginInfo).then((res) => {
      console.log("Response Data:", res.data);
      if (res.data === "User is logged in") {
        alert('Correct email and password')
      }
      if (res.data._message === 'user does not exist') {
        alert('Error!!')
      }
    });
  }
  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  getPassword = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
    render(){
        return(
            <div>
                <div className="form-div">
            <form >
              <input
                type="text"
                placeholder="Email "
                onChange={(e) => {
                  this.getEmail(e);
                }}
                value={this.email}
                className="form-control-from-group"
              />
              <input
                type="password"
                placeholder="Password "
                onChange={(e) => {
                  this.getPassword(e);
                }}
                value={this.password}
                className="form-control-from-group"
              />
              <input
                type="submit"
                className="btn btn-danger btn-black"
                value="Log in"
              />
            </form>
            </div>
            </div>
        );
    }
}



