import React, { Component } from "react";

export default class FacultyImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={require("../../assests/images/facultyImg.svg")} alt="awsar-faculty" /> 
    );
  }
}
