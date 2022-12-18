import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import NonTeachings from "../../containers/nonTeaching/NonTeaching";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import NonTeachingImg from "./NonTeachingImg";
import { competitiveSites } from "../../portfolio";
import { organization } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class NonTeaching extends Component {
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
                <NonTeachingImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Our Non Teaching Staff
                </h1>
                {/*<h3 className="heading-sub-text" style={{ color: theme.text }}>
                  AWASAR Addministration 
                </h3>*/}
              </div>
            </div>
          </Fade>
          {organization.organization.length > 0 ? (
            <NonTeachings theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default NonTeaching;

