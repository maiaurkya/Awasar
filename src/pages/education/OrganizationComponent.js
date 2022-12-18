import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Organizations from "../../containers/organization/Organizations";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import OrganizationImg from "./OrganizationImg";
import { competitiveSites } from "../../portfolio";
import { organization } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Organization extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <OrganizationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Our Administration
                </h1>
                {/*<h3 className="heading-sub-text" style={{ color: theme.text }}>
                  AWASAR Addministration 
                </h3>*/}
              </div>
            </div>
          </Fade>
          {organization.organization.length > 0 ? (
            <Organizations theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Organization;

