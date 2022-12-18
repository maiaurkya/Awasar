import React, { Component } from "react";
import "./OrganizationCard.css";
import { Fade } from "react-reveal";

class OrganizationCard extends Component {
  render() {
    const orgnization = this.props.orgnization;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: orgnization.color_code }}
              >
                <img
                  className="logo_img"
                  src={require(`../../assests/images/${orgnization.logo_path}`)}
                  alt={orgnization.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h6 className="content-title" style={{ color: theme.body }}>
                  {orgnization.subtitle}
                </h6>
              </div>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {orgnization.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {orgnization.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default OrganizationCard;
