import React, { Component } from "react";

export default class AddressImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={require("../../assests/images/address_image.svg")} alt="" />
    );
  }
}
