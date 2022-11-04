import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Atse from "../../containers/education/Atse";
import Skills from "../../containers/skills/Skills";
import DirectorMsgSection from "../../containers/skills/DirectorMsgSection";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class AtseExam extends Component {
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
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  ATSE - 2023
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Awasar Talent Search Examination - 2023
                </h3>
              </div>
            </div>
          </Fade>
          <Atse theme={this.props.theme} />
    	<DirectorMsgSection theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default AtseExam;
