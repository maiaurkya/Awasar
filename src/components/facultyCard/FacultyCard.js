import React, { Component } from "react";
import "./FacultyCard.css";
import { Fade } from "react-reveal";

class FacultyCard extends Component {
  render() {
    const faculty = this.props.faculty;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: faculty.color_code }}
              >
                <img
                  className="logo_img"
                  src={require(`../../assests/images/${faculty.logo_path}`)}
                  alt={faculty.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h6 className="content-title" style={{ color: theme.body }}>
                  {faculty.subtitle}
                </h6>
              </div>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {faculty.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {faculty.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default FacultyCard;
