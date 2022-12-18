import React, { Component } from "react";
import "./NonTeaching.css";
import { Fade } from "react-reveal";
import { non_teaching } from "../../portfolio";
import NonTeachingCard from "../../components/nonTeachingCard/NonTeachigCard";

class NonTeachings extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-body-div">
	  {non_teaching.non_teaching.map((cert) => {
	    return <NonTeachingCard non_teaching={cert} theme={theme} />;
	  })}
        </div>
      </div>
    );
  }
}

export default NonTeachings;
