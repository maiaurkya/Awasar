import React, {useState, useEffect} from "react";
import "./AdmitCard.css";
import { Fade } from "react-reveal";
import {enquiryFormSucessMsg, status, enrollmentPrefix, enrollmentStatic} from '../../constant';
function AdmitCard(props) {
const {contact, logo, data, center} = props;
return(    
<section>
	<div className="container">
		<div className="admit-card">
			<div className="BoxA border- padding mar-bot" style={{ border: "2px solid #000",color: "#000"}}> 
				<div className="row headerBlock" >
					<div className="col-sm-4">
						<h5>AWASAR</h5>
						<p className="small-text">{contact.addressSection.subtitle}</p>
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
			<div className="BoxC border- padding mar-bot" style={{ border: "2px solid #000",color: "#000"}}>
				<div className="row txt-center">
					<div className="col-sm-12">
						<h5>Enrollment No : {data && `${enrollmentPrefix}${parseInt(enrollmentStatic)+parseInt(data.id)}`}</h5>
					</div>
					
				</div>
			</div>
			<div className="BoxD border- padding mar-bot" style={{ border: "2px solid #000",color: "#000"}}> 
				<div className="row txt-center">
					<div className="col-sm-10">
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
					<div className="col-sm-2 passport-size" style={{margin:"0px", maxWidth:"100px"}}>
						<table className="table table-bordered" style={{color: "#fff",height:'90%'}}>
						  <tbody>
							<tr>
								<td style={{ width:"100px"}}>Passport Size Photo
								</td>
							</tr>
						  </tbody>
						</table>
					</div>
					
				</div>
				<div className="row">
					<div className="col-sm-12">
						<table className="table table-bordered" style={{color: "#000"}}>
							<thead>
								<tr>
									<th>Sr. No.</th>
									<th>Paper</th>
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
			<div className="BoxE border- padding mar-bot txt-center" style={{ border: "2px solid #000",color: "#000"}}>
				<div className="row">
					<div className="col-sm-12">
						<h5>EXAMINATION VENUE</h5>
						<p className="venue-address">{data && data.center ? data.centerAddress 
						: center ? `${center.address}` : ''}</p>
					</div>
				</div>
				<p className="signature-box">Authorized Signatory <img className="signature" style={{width:"200px",height:"40px"}} src={require("../../assests/images/signature.png")} /></p>
			</div>
			<footer className="txt-center" >
				<p><i class="fa fa-bolt"></i> Reach the Exam center 45 minutes before the start of exam. </p>
				<p><i class="fa fa-bolt"></i> keep all the electronic devices (Smart Watch, Health band, any type of calculator, Digital watch etc) outside of the exam hall. </p>
				<p><i class="fa fa-bolt"></i> Follow all the Covid-19 protocols issued by your respective state governments. </p>
				<p><i class="fa fa-bolt"></i> keep this Admit Card till the last satge of ATSE-2023. </p>
				<p><i class="fa fa-bolt"></i> use of any unfair means during the exam is strictly prohibited. Any candidate who will be caught using any unfair means during the exam, will be restricted from the ATSE-2023. </p>
			</footer>
			
		</div>
	</div>
	
</section>
    );
    }
    export default AdmitCard;
