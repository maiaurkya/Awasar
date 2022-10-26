import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  //MDBSelect,
  MDBInput,
  MDBCheckbox,
  MDBRadio,
} from "mdb-react-ui-kit";
import "./onLineForm.css";
import "./core.css";

function OnLineForm() {
  return (
    <MDBContainer fluid className="h-custom">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12" className="m-5">
          <MDBCard
            className="card-registration card-registration-2"
            style={{ borderRadius: "15px" }}
          >
            <MDBCardBody className="p-0">
              <MDBRow>
                <MDBCol md="6" className="p-5 bg-white">
                  <h3 className="fw-normal mb-5">General Infomation</h3>

                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First Name"
                        size="lg"
                        id="form1"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last Name"
                        size="lg"
                        id="form2"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Mother Name"
                        size="lg"
                        id="form1"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Father Name"
                        size="lg"
                        id="form2"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Annual Income (In Lakhs)"
                    size="lg"
                    id="form3"
                    type="text"
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="School"
                    size="lg"
                    id="form3"
                    type="text"
                  />
                  <MDBRow>
                    <div className="d-md-flex ustify-content-start align-items-center mb-4">
                      <h6 class="fw-bold mb-0 me-4 label-header-radio">
                        Board:{" "}
                      </h6>
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio1"
                        value="option1"
                        label="CBSE"
                        inline
                      />
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio2"
                        value="option2"
                        label="ICSE"
                        inline
                      />

                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio3"
                        value="option3"
                        label="BIHAR"
                        inline
                      />
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio5"
                        value="option5"
                        label="Others"
                        inline
                      />
                    </div>
                  </MDBRow>
                  <MDBRow>
                    <div className="d-md-flex ustify-content-start align-items-center mb-4">
                      <h6 class="fw-bold mb-0 me-4 label-header-radio">
                        Category:{" "}
                      </h6>
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio1"
                        value="option1"
                        label="General"
                        inline
                      />
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio2"
                        value="option2"
                        label="OBC"
                        inline
                      />

                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio3"
                        value="option3"
                        label="SC"
                        inline
                      />
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio4"
                        value="option4"
                        label="ST"
                        inline
                      />
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio5"
                        value="option5"
                        label="Others"
                        inline
                      />
                    </div>
                  </MDBRow>
                </MDBCol>

                <MDBCol md="6" className="bg-indigo p-5">
                  <h3
                    className="fw-normal mb-5 text-white"
                    style={{ color: "#4835d4" }}
                  >
                    Contact Details
                  </h3>

                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Address"
                    size="lg"
                    id="form6"
                    type="text"
                  />

                  <MDBRow>
                    <MDBCol md="5">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="City"
                        size="lg"
                        id="form6"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol md="7">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="District"
                        size="lg"
                        id="form7"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="5">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Code +"
                        size="lg"
                        id="form9"
                        type="text"
                        value="+91"
                      />
                    </MDBCol>

                    <MDBCol md="7">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Phone Number"
                        size="lg"
                        id="form10"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Your Email"
                    size="lg"
                    id="form8"
                    type="email"
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    labelClass="text-white mb-4"
                    label="I do accept the Terms and Conditions of your site."
                  />
                  <MDBBtn color="light" size="lg">
                    Register
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default OnLineForm;
