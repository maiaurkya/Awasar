import React, { Component } from "react";
import "./Announcement.css";
class Announcement extends Component {
  render() {
    const theme = this.props.theme;
    return (
		<div className="sidebar">
			<div className="container">
			<a href="/#/atse">
			<img src={require("../../assests/images/announce.svg")} alt="" />
				<div className="centered">
					<label>Announcing!</label>
					<p className="small-text">Get Your</p>
					<p className="small-text">ATSE-2023</p>
					<p className="scholarship">Scholarship</p>
					<p className="session">session: 2023-2024</p>
				</div>
			</a>
			</div>
		</div>
	);
  }
}

export default Announcement;
