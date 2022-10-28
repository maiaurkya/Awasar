import React, { Component } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, formPageData, contactPageData } from "../../portfolio.js";
import { Fade } from "react-reveal";
import OnLineForm from "../../components/forms/OnLineForm";
const FormData = formPageData.formSection;
const phoneSection = contactPageData.phoneSection;

class Form extends Component {
	
  render() {
      const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <OnLineForm title={FormData["title"]} theme={theme} phoneSection={phoneSection} />
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Form;
