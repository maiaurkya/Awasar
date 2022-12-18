import React, { Component } from "react";
import "./Facultys.css";
import { Fade } from "react-reveal";
import { faculties } from "../../portfolio";
import FacultyCard from "../../components/facultyCard/FacultyCard";

class Facultys extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-body-div">
	  {faculties.faculties.map((cert) => {
	    return <FacultyCard faculty={cert} theme={theme} />;
	  })}
        </div>
      </div>
    );
  }
}

export default Facultys;
