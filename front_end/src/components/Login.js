import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Apiconfig from '../Apiconfig'


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
       email:this.state.email,
      password:this.state.password
    };
    axios.post("http://localhost:5000/login",loginInfo).then((res) => {
      console.log("Response Data:", res.data);
      if (res.data === "Login successful!") {
        alert('Correct email and password')
      }
      if (res.data === "Password is not correct") {
        alert('Wrong Password')
      }
      if(res.data === "Email does not exist"){
        alert('Email does not exist')
      }
    })
  }
  getEmail = (event) => {
    
    this.setState({
      email: event.target.value,
    });
    console.log(this.state.email)
  };
  getPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
    console.log(this.state.password)
  };
    render(){
        return(
            <div>
                <div className="form-div">
            <form onSubmit={this.onSubmit} >
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



