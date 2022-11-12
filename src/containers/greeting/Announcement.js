import React, { Component } from "react";
import QRCode from "qrcode.react";
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
					<label>ATSE-2023!</label>
					<p className="small-text">(AWASAR TALENT SEARCH EXAMINATION)</p>
					<p className="scholarship">JEE-MAIN / Advanced</p>
					 <div style={{marginTop:'10px',marginBottom: '10px'}}>
						 <div>
						    <QRCode
						       value="https://www.awasaredu.com/#/atse"style={{ width: 80, height:80 }}/>
						    <p className="small-text">Click / Scan For Registration </p>
						 </div>
					      </div>
					<p className="session">session: 2023-2024</p>
				</div>
				
			</a>
			</div>
		</div>
	);
  }
}

export default Announcement;
