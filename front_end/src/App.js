import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SignUp from './components/SignUp.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login.js'
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

  render() {
    <Login changeEmail={this.changeEmail} changepassword={this.changepassword} changeUserName={this.changeUserName} onSubmit={this.onSubmit}
    userName={this.state.userName} passwprd={this.state.password} email={this.state.email} />
    return (
      <Router>
        <div>
          <SignUp changeEmail={this.changeEmail} changepassword={this.changepassword} changeUserName={this.changeUserName} onSubmit={this.onSubmit}
                  userName={this.state.userName} passwprd={this.state.password} email={this.state.email}/>
          {/* <Route exact path="/" component={()=> <Home />}/> */}
          <Route path="/login" component={()=> <Login />} />
        </div>
      </Router>
    );
  }
}
