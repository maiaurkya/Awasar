import React, { Component } from "react";

export default class CarrierImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={require("../../assests/images/carrier.svg")} alt="awsar-faculty" /> 
    );
  }
}
