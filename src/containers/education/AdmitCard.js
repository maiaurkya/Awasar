import React, {useState, useEffect} from "react";
import "./AdmitCard.css";
import { Fade } from "react-reveal";
import {enquiryFormSucessMsg, status, enrollmentPrefix, enrollmentStatic} from '../../constant';
function AdmitCard(props) {
const {contact, logo, data, center} = props;
console.log(data);
return(    
<section>
	<div className="container">
		<div className="admit-card">
			<div className="BoxA border- padding mar-bot" style={{
    backgroundColor: "rgb(169 50 23)",
    color: "#fff",
}}> 
				<div className="row headerBlock" >
					<div className="col-sm-4">
						<h5>AWASAR</h5>
						<p>{contact.addressSection.subtitle}</p>
					</div>
			<div className="col-sm-4 txt-center logo">
						<img src={require("../../assests/images/logo.png")} alt="" />
					</div>
					<div className="col-sm-4">
						<h5>ATSE - 2023</h5>
						<p style={{fontSize: "10px"}}>
							Awasar Talent Search Examination - 2023
						</p>
						</div>
				</div>
			</div>
			<div className="BoxC border- padding mar-bot" style={{
    backgroundColor: "rgb(215 136 19)",
    color: "#fff",
}}>
				<div className="row txt-center">
					<div className="col-sm-12">
						<h5>Enrollment No : {data && `${enrollmentPrefix}${parseInt(enrollmentStatic)+parseInt(data.id)}`}</h5>
					</div>
				</div>
			</div>
			<div className="BoxD border- padding mar-bot" style={{
    backgroundColor: "rgb(86 23 169)",
    color: "#fff",
}}> 
				<div className="row txt-center">
					<div className="col-sm-12">
						<table className="table table-bordered" style={{color: "#fff"}}>
						  <tbody>
							<tr>
							  <td><b>Student Name: </b>{data && `${data.first_name} ${data.last_name}`}</td>						
							  <td><b>Father Name: </b>{data && `${data.father_name}`}</td>
							</tr>
							<tr>
							  <td colSpan="2" style={{height: "auto"}}><b>Address: </b>{data && `${data.address}`}</td>
							</tr>
						  </tbody>
						</table>
					</div>
					
				</div>
			</div>
			<div className="BoxE border- padding mar-bot txt-center" style={{
    backgroundColor: "rgb(15 103 122)",
    color: "#fff",
}}>
				<div className="row">
					<div className="col-sm-12">
						<h5>EXAMINATION VENUE</h5>
						<p>{data && data.center ? data.centerAddress 
						: center ? `${center.address}` : ''}</p>
					</div>
				</div>
			</div>
			<div className="BoxF border- padding mar-bot txt-center" style={{
    backgroundColor: "rgb(22 28 34)",
    color: "#fff",
}}>
				<div className="row">
					<div className="col-sm-12">
						<table className="table table-bordered" style={{color: "#fff"}}>
							<thead>
								<tr>
									<th>Sr. No.</th>
									<th>Subject/Paper</th>
									<th>Exam Date</th>
								</tr>
							</thead>
						  <tbody>
							<tr>
							  <td>1</td>
							  <td>Stage-1/Prelims</td>
							  <td>{data && data.center ? data.ExamDateTime : center ? `${center.examDateTime}` : ''}</td>
							</tr>
						  </tbody>
						</table>
					</div>
				</div>
			</div>
			<footer className="txt-center">
				<p>*** AWASAR TRUST ***</p>
			</footer>
			
		</div>
	</div>
	
</section>
    );
    }
    export default AdmitCard;
