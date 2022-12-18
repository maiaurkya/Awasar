import React, { Component } from "react";

export default class NonTeachingImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={require("../../assests/images/organisation.svg")} alt="awsar-faculty" /> 
    );
  }
}
