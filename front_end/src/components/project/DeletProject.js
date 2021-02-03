import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";
import { Redirect } from "react-router-dom";
export default class DeletProject extends Component {
  deleteProjectByID = (id) => {
    axios.delete(`${API_URL}/project/${id}`);
    return <Redirect to="/" />
  };
  render() {
    const id = this.props.id;
    return (
      <div>
        <button
          onClick={() => {
            this.deleteProjectByID(id);
          }}
        >
          delete
        </button>
      </div>
    );
  }
}
