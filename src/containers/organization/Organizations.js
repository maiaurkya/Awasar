import React, { Component } from "react";
import "./Organizations.css";
import { Fade } from "react-reveal";
import { organization } from "../../portfolio";
import OrganizationCard from "../../components/organizationCard/OrganizationCard";

class Organizations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-body-div">
	  {organization.organization.map((cert) => {
	    return <OrganizationCard orgnization={cert} theme={theme} />;
	  })}
        </div>
      </div>
    );
  }
}

export default Organizations;
