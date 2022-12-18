import React, { Component } from "react";
import "./NonTeachigCard.css";
import { Fade } from "react-reveal";

class NonTeachigCard extends Component {
  render() {
    const non_teaching = this.props.non_teaching;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: non_teaching.color_code }}
              >
                <img
                  className="logo_img"
                  src={require(`../../assests/images/${non_teaching.logo_path}`)}
                  alt={non_teaching.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h6 className="content-title" style={{ color: theme.body }}>
                  {non_teaching.subtitle}
                </h6>
              </div>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {non_teaching.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {non_teaching.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default NonTeachigCard;
