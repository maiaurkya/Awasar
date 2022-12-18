import React, { Component } from "react";

export default class OrganizationImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={require("../../assests/images/administration.svg")} alt="awsar-faculty" /> 
    );
  }
}
