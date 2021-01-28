import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Login extends Component {
    render(){
        return(
            <div>
                <div className="form-div">
            <form >
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
                  this.props.changepassword(e);
                }}
                value={this.props.password}
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



