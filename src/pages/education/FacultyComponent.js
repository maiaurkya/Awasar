import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Facultys from "../../containers/faculty/Facultys";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import FacultyImg from "./FacultyImg";
import { competitiveSites } from "../../portfolio";
import { faculties } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Faculty extends Component {
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
                <FacultyImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Our Gurus
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Teaching that impacts is not head to head, but heart to heart
                </h3>
              </div>
            </div>
          </Fade>
          {faculties.faculties.length > 0 ? (
            <Facultys theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Faculty;

