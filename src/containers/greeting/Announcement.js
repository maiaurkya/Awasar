import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import QRCode from "qrcode.react";
import "./Announcement.css";
class Announcement extends Component {
  render() {
    const theme = this.props.theme;
    return (
		<div className="sidebar">
			<div className="container">
			<NavLink
		          to="/atse"
		          tag={Link}
		        >
			<img src={require("../../assests/images/announce.svg")} alt="ATSE-2023" />
				<div className="centered">
					<label>ATSE-2023!</label>
					<p className="small-text">(AWASAR TALENT SEARCH EXAMINATION)</p>
					<p className="scholarship">JEE-MAIN / Advanced</p>
					 <div style={{marginTop:'10px',marginBottom: '10px'}}>
						 <div>
						    <QRCode
						       value="https://www.awasaredu.com/atse"style={{ width: 80, height:80 }}/>
						    <p className="small-text">Click / Scan For Registration </p>
						 </div>
					      </div>
					<p className="session">session: 2023-2024</p>
				</div>
				
			
                </NavLink>
			</div>
		</div>
	);
  }
}

export default Announcement;
