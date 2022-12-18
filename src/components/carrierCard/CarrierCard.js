import React, { Component } from "react";
import "./CarrierCard.css";

class CarrierCard extends Component {
  render() {
    const carrier = this.props.carrier;
    console.log("carrier:",carrier);
    const theme = this.props.theme;
    return (
      <div
        className="experience-card"
        style={{ border: `1px solid ${carrier["color"]}` }}
      >
        <div className="experience-card-logo-div">
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${carrier["logo_path"]}`)}
            alt=""
          />
        </div>
        <div className="experience-card-body-div carrier">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {carrier["title"]}
              </h3>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                Location: <b>{carrier["location"]}</b>
              </p>
            </div>
            <div className="experience-card-heading-left">
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                No of Vacancy: <b>{carrier["no_of_vacancy"]}</b>
              </p>
            </div>
            {carrier["eligibility"].length > 0 &&
            <div className="experience-card-heading-left">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                Eligibility: {carrier["eligibility"].map((v, i) => {
          		return <p className="eligibility" key={i}>{v}</p>;
       	 })}
              </p>
            </div>
            }
          </div>
          <p
            className="experience-card-description"
            style={{ color: theme.text }}
          >
            {carrier["description"]}
            {(carrier["contactEmail"] || carrier["contactNo"]) && 
            <p
            	className="experience-card-description"
	            style={{ color: theme.text }}
            >If you are interested, 
            {(carrier["contactEmail"] && carrier["contactNo"])
            ? <> Please leave your resume at {carrier["contactEmail"]} or contact at {carrier["contactNo"]} </>
            : (carrier["contactEmail"]) ? <> Please leave your resume at {carrier["contactEmail"]} </> :  <> Please contact at {carrier["contactNo"]} </>}
            </p> }
          </p>
        </div>
      </div>
    );
  }
}

export default CarrierCard;
