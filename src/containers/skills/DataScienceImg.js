import React, { Component } from "react";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    console.log("theme", theme, theme.fileName);
    return (
      <img src={require(`../../assests/images/${theme.fileName}.svg`)} alt="" />
    );
  }
}
