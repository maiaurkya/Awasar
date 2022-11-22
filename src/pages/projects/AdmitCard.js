import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Fade } from "react-reveal";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Select from "react-select";
import { useRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import AdmitCard from "../../containers/education/AdmitCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import SelectBox from "../../components/Select/SelectBox";
import TopButton from "../../components/topButton/TopButton";
import {cityList, cityListWithLabel, enrollmentPrefix, enrollmentStatic} from "../../constant";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  baseUrl,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class AdmitCardPage extends Component {
constructor(props) {
    super(props);
    this.state = {
    admitStatus: false, 
    loading: false, 
    center: '', 
    selector: '',
    res: '', 
    resStatus:'',
    errorValues:'',
    buttonText:'Get Your Admit Card',
    centerRequired:false
    };
    this.searchInput = React.createRef();
  }
  
  onChangeCenter = selectedOption => {
    this.setState({ center: selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  changeHandler = (e) => {
  	console.log(e.target.value);
  	this.setState({ selector: e.target.value });
  }
  
setVisibal = (event) => {
	event.preventDefault();
	let errors = {};
	
	if (!this.state.selector || !this.state.selector.trim()) {
	  	errors.selector = "Mobile Nmuber / Email is required";
	} 
	else {
	   	delete errors.selector;
	}
	if(this.state.centerRequired && !this.state.center){
		errors.center = "Please select your Exam Center";
	}else{
		delete errors.center;
	}
	const requestOptions = {
		method: 'GET',
	        headers: { 'Content-Type': 'application/json' }
	};
	const readyToCall = Object.keys(errors).length ;
	if(!readyToCall){
	errors= {};
	fetch(`${baseUrl}enquiry/getEnquiryData/${this.state.selector}`)
		.then(response => response.json())
		.then(data => {
			this.setState({ res:data,
			resStatus: data.statusType,
			errorValues : {}
			});
			errors= {};
			if(data.statusType !== 'error'){
				this.setState({admitStatus: data.data.center ? true : this.state.center ? true : false, buttonText:data.data.center ? 'Download Your Admit Card' : this.state.center ? 'Download Your Admit Card' :'Get Your Admit Card', centerRequired: data.data.center ? false : true});
			}
		})
		.catch((error) => {
		    console.log('error: ' + error);
		    errors.api="Check your internet connection!, if it working fine try after sometimes."
		    this.setState({errorValues: errors});
		    
		  });
		
		
	}else{
		this.setState({errorValues: errors})
	}
};

 asyncPDF(event, data) {
 event.preventDefault();
  this.setState({buttonText:'Downloading...', admitStatus: false});
  console.log(data, this.state);
  this.printDocument(data).then(()=>{
  if(this.state.centerRequired){
  const requestOptions = {
		method: 'PUT',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({center:data.center.value, address: data.center.address,examDateTime:data.center.examDateTime})
	};
	
	fetch(`${baseUrl}enquiry/updateCenter/${this.state.selector}`,requestOptions)
	.then(response => response.json())
	.then(data => {console.log(data)
		this.setState({buttonText:'Get Your Admit Card', admitStatus: false, centerRequired: false});
	}).catch((error) => {
		    console.log('error: ' + error);
		    let errors = {};
		    errors.api="Check your internet!, if it is working fine, try after sometimes.";
		    this.setState({errorValues: errors});
		    
		  });
	}else{
		this.setState({buttonText:'Get Your Admit Card', admitStatus: false, centerRequired: false});
	}
});
}

  printDocument = (data) =>{
  return new Promise(resolve => {
    const input = document.getElementById('divToPrint');
    html2canvas(input, {
                quality: 1,
                scale: 5}).then(function(canvas) {
      let img = new Image();
      img.src = canvas.toDataURL('image/png');
      img.onload = function () {
        let pdf = new jsPDF('p', 'px', 'A4', true);
        pdf.addImage(img, 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
        pdf.save(`hallTicket-${enrollmentPrefix}${parseInt(enrollmentStatic)+parseInt(data.res.data.id)}.pdf`);
        setTimeout(()=>{
	    resolve('resolved');
	    },1000);
      };
    });
  });
  }
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        
        <div className="project-button">
		<form>
			<Form.Group className="mb-3" controlId="formBasicPassword">
				
				<Form.Control type="text" className={
              this.state.selector !== '' ? " active" : ""
            } onChange={this.changeHandler} value={this.selector} />
				<Form.Label>Mobile Number / Email</Form.Label>
				<label className={this.state.errorValues.selector || this.state.resStatus === 'error' ? 'invalid-feedback': 'hide'}>{this.state.errorValues.selector ? this.state.errorValues.selector : this.state.resStatus === 'error' ? `No Record found please try with different Mobile Nmuber / Email.` : '' }</label>
				<div className="form-notch">
					<div className="form-notch-leading"></div>
					<div className="form-notch-middle" style={{width: "140px"}}>
					</div>
					<div className="form-notch-trailing"></div>
				</div>
		      	</Form.Group>	
		      	{this.state.centerRequired &&
			<Form.Group controlId="formBasicSelect">
				<Select
				      defaultValue={cityListWithLabel[0]}
				      label="Single select"
				      options={cityListWithLabel}
				      value={this.state.center}
				      onChange={this.onChangeCenter}
				    />
				    <label className={this.state.errorValues.center ? 'invalid-feedback': 'hide'}>{this.state.errorValues.center}</label>
		      	</Form.Group>
		  	}
		  	<div style={{position: "relative"}}>
			<button className="main-button admit-button" onClick={(e)=>!this.state.admitStatus ? this.setVisibal(e) : this.asyncPDF(e, this.state)} style={{
			  color: theme.body,
			  backgroundColor: theme.text,
			  border: `solid 1px ${theme.text}`,
			}}>
			{this.state.buttonText} 
			</button>
			<label className={this.state.errorValues.api ? 'invalid-feedback': 'hide'} style={{top:'-6px',textAlign:'left',width:'310px',left:'-30px',height:'10px'}}>{this.state.errorValues.api}</label>
			</div>
	 	</form>
        </div>
       
        <div id="divToPrint" className={`repo-cards-div-main ${(!this.state.admitStatus  ? 'hide' :'')}`}>
            <AdmitCard theme={theme} contact={contactPageData} logo={greeting.logo_name} data={this.state.res.data} center={this.state.center}/>
        </div>
        <div className={`project-button ${(!this.state.admitStatus  ? 'hide' :'')}`}>
		<button className="main-button admit-button" onClick={(e)=>!this.state.admitStatus ? this.setVisibal(e) : this.asyncPDF(e, this.state)} style={{
			  color: theme.body,
			  backgroundColor: theme.text,
			  border: `solid 1px ${theme.text}`,
			}}>
			{this.state.buttonText} 
		</button>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default AdmitCardPage;
