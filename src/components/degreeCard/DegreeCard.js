import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip left duration={2000}>
            <div className="card-img" style={{boxShadow: `${degree.boxShadow}`}}>
              <label
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)",
                }}
              >{degree.label}
              </label>
            </div>
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%", boxShadow: `${degree.boxShadow}` }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: degree.bodyColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: degree.titleColor }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: degree.titleColor}}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {!degree.type ? degree.descriptions.map((sentence) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              }) 
              : degree.type === 'exam' ?
              degree.stageDetails.map((details) => {
              return (
              <div>
	      	<h3 className="stage" style={{ color: theme.text }}>
		 {details.stage}
		</h3>
		{details.date1 &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>1. </label>  {details.date1}
                  </p>
                  }
                  {details.date2 &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>2. </label>  {details.date2}
                  </p>
                  }
                  {details.date3 &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>3. </label>  {details.date3}
                  </p>
                  }
                  {details.date4 &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>4. </label>  {details.date4}
                  </p>
                  }
                  {details.date5 &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>5. </label>  {details.date5}
                  </p>
                  }
                  {details.date6 &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>6. </label>  {details.date6}
                  </p>
                  }
                  </div>
                );
              }) : degree.type === 'faq' ?
              degree.stageDetails.map((details) => {
              return (
              <div>
	      	
		{details.interViewStage &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>Interview Stage </label> - {details.interViewStage}
                  </p>
                  }
                  {details.FinalSelection &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>Final Selection for AWSAR-50 </label> - {details.FinalSelection}
                  </p>
                  }
                  {details.notSelected &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>Students who will not be selected for AWASAR-50 </label> -   {details.notSelected}
                  </p>
                  }
                  {details.date4 &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>4. </label>  {details.date4}
                  </p>
                  }
                  {details.date5 &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>5. </label>  {details.date5}
                  </p>
                  }
                  {details.date6 &&
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>6. </label>  {details.date6}
                  </p>
                  }
                  </div>
                );
              })
              : degree.stageDetails.map((details) => {
              return (
              <div>
	      	<h3 className="stage" style={{ color: theme.text }}>
		 Stage - {details.stage}
		</h3>
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>Type</label> - {details.type}
                  </p>
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>Total No. of Questions</label> - {details.noOfQues}
                  </p>
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>Time Durations</label> - {details.duration}
                  </p>
                  <p className="content-list" style={{ color: theme.text }}>
                    <label>Paper Pattern</label> - {details.Pattern}
                  </p>
                  </div>
                );
              })
              }
              {degree.website_link && (
              <div>
                <NavLink
	          to={degree.website_link}
	          tag={Link}
	        >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: degree.bodyColor }}
                  >
                    <p className="btn" style={{ color: degree.titleColor }}>
                      Apply for ATSE - 2023
                    </p>
                  </div>
                </NavLink>
                {
              degree.past_year_paper_link && 
              <a
                  href={require(`../../assests/past-papers/${degree.past_year_paper_link}.pdf`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: degree.bodyColor }}
                  >
                    <p className="btn" style={{ color: degree.titleColor }}>
                      Past Year Paper for ATSE - 2022
                    </p>
                  </div>
                </a>
                }
                {
              degree.admit_card_link && 
              <NavLink
	          to={degree.admit_card_link}
	          tag={Link}
	        >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: degree.bodyColor }}
                  >
                    <p className="btn" style={{ color: degree.titleColor }}>
                      Admit Card For ATSE-2023
                    </p>
                  </div>
                </NavLink>
                }
                </div>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
