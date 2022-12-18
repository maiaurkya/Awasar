import React, { Component } from "react";
import CarrierCard from "../../components/carrierCard/CarrierCard.js";
import "./CarrierAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class CarrierAccordion extends Component {
  render() {
    const theme = this.props.theme;
    console.log("this.props.sections: ",this.props.sections);
    return (
      <div className="experience-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: `${theme.headerColor}`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["experiences"].map((carrier) => {
                  return (
                    <CarrierCard carrier={carrier} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default CarrierAccordion;
