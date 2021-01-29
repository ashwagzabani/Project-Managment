import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class SignUp extends Component {
    render(){
        return(
            <div>
            <div className="sidebar">{/* <Sidebar /> */}</div>
            <div className="container">
              <div className="form-div">
                <form onSubmit={this.props.onSubmit}>
                  <input
                    type="text"
                    placeholder="User Name "
                    onChange={(e) => {
                      this.props.changeUserName(e);
                    }}
                    value={this.props.userName}
                    className="form-control-from-group"
                  />
                  <input
                    type="text"
                    placeholder="Email "
                    onChange={(e) => {
                      this.props.changeEmail(e);
                    }}
                    value={this.props.email}
                    className="form-control-from-group"
                  />
                  <input
                    type="password"
                    placeholder="Password "
                    onChange={(e) => {
                      this.changepassword(e);
                    }}
                    value={this.props.password}
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



