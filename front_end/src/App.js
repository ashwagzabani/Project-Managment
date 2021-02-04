import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Forms from './components/Forms'
// import "./form.css";
import CreateNewTask from "./components/Task/CreateNewTask";
export default class App extends Component {
constructor() {
    super();
    //signUp faild
    this.state = {
      user: {},
      projectList: [],
      isLogged:false,
    };
    this.loginHandler = this.loginHandler.bind(this);
  }
  loginHandler = (userInfo) => {
    // const userId = this.state.userId;
    this.setState({ user: userInfo, isLogged:true });
  };

  logOut =()=>{
    this.setState({isLogged:false, user:{}, projectList:[] });

  }
  render() {
    
    return (
      <>
        {this.state.isLogged ? (
          <div>
            <Sidebar
              userId={this.state.user._id}
              userName={this.state.user.userName}
              isLogged={this.state.isLogged}
              loginHandler={this.loginHandler}
            />
          </div>
        ) : (
          <div>
            <div>
              <Forms loginHandler={this.loginHandler} />
            </div>
          </div>
        )}
      </>
    );
  }
}
