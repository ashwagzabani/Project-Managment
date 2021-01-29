import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props){
      super(props);
      this.state={
        userName: "",
        email: "",
        password: "",
      }
      this.changeUserName = this.changeUserName.bind(this);
      this.changeEmail = this.changeEmail.bind(this);
      this.changepassword = this.changepassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

  changeUserName = (event) => {
    //change userName by user name that write it by user
    this.setState({
      userName: event.target.value,
    });
  };
  //change changeEmail by user email that write it by user
  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  //change changepassword by user password that write it by user
  changepassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  //after user Submit the data
  onSubmit = (event) => {
    /*The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.*/
    event.preventDefault();
    //do not need to refresh the page after user submit it must be forward into home page    event.preventDefault()
    //we need to send that into back end all data from front into back end by axiod
    const registered = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };
    //we need to post that data into server
    //post registered to this endPoint which back end (Schema) - to MongoDB
    axios.post("http://localhost:5000/signUp", registered).then((res) => {
      console.log("Response Data:", res.data);
      if (res.data === "Already Exist") {
        alert('You Already have account please login')
      }
      if (res.data._message === 'User validation failed') {
        alert('Error!!')
      }
      else {
        alert('Welcome')
        console.log("User Data", registered);
      }
    });
  };
    render(){
        return(
            <div>
            <div className="container">
              <div className="form-div">
                <form onSubmit={this.onSubmit}>
                  <input
                    type="text"
                    placeholder="User Name "
                    onChange={(e) => {
                      this.changeUserName(e);
                    }}
                    value={this.state.userName}
                    className="form-control-from-group"
                  />
                  <input
                    type="text"
                    placeholder="Email "
                    onChange={(e) => {
                      this.changeEmail(e);
                    }}
                    value={this.state.email}
                    className="form-control-from-group"
                  />
                  <input
                    type="password"
                    placeholder="Password "
                    onChange={(e) => {
                      this.changepassword(e);
                    }}
                    value={this.state.password}
                    className="form-control-from-group"
                  />
                  <input
                    type="submit"
                    className="btn btn-danger btn-black"
                    value="Sign Up"
                  />
                </form>
              </div>
            </div>
          </div>
        );
    }
}



