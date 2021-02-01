import React, { Component } from "react";
import API_URL from "../../Apiconfig";
import axios from "axios";
export default class DeletProject extends Component {
  deleteProjectByID = (id) => {
    return axios.delete(`${API_URL}/project/${id}`);
  };
  render() {
    const id = "601438f5c9ea422b68371d3a";
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
