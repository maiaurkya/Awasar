import React, {useState, useEffect} from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBRadio,
} from "mdb-react-ui-kit";
import Button from "../../components/button/Button";
import "./onLineForm.css";
import "./core.css";
import { Fade } from "react-reveal";
import {enquiryFormSucessMsg, status} from '../../constant';

function OnLineForm(props) {
  const {title,theme,phoneSection, baseUrl} = props;
  const [inputField , setInputField] = useState({
		formValues: {}
	})
  const [formTitle, setFormTitle] = useState(title)
	const [validation, setValidation] = useState({});
	const [apiRes, setApiRes] = useState({statusType: ''});
  const [bodyMsg, setBodyMsg] = useState('');
	useEffect(() =>{
    if(apiRes.statusType === status.success){
       setFormTitle(enquiryFormSucessMsg.sucessTitle);
       setBodyMsg(enquiryFormSucessMsg.sucessBody);
    }else if(apiRes.statusType === status.exist){
      setFormTitle(enquiryFormSucessMsg.existingTitle);
      setBodyMsg(enquiryFormSucessMsg.existingBody);
    }else if(apiRes.statusType === status.error){
      setFormTitle(enquiryFormSucessMsg.errorTitle);
      setBodyMsg(enquiryFormSucessMsg.errorBody);
    }
  },[apiRes])
  const inputsHandler = (e) =>{
		validateField();
    let formValues = inputField.formValues;
		const {name, value} = e.target;
    formValues[name] = value;
    setInputField({formValues});
  }
    
    const submitButton = () =>{
		const validationErrors = validateField();
		const readyToCall = Object.keys(validationErrors).length ;
		if(!readyToCall){
			const requestOptions = {
				method: 'POST',
			        headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(inputField.formValues)
			};
			fetch(`${baseUrl}enquiry/create`, requestOptions)
				.then(response => response.json())
				.then(data => setApiRes(data))
				.catch((error) => {
		    			console.log('error: ' + error);
		    			let errors = {};
		    			errors.api="Check your internet!, if it is working fine, try after sometimes.";
		    			setValidation({errors});
		    
		  });
		}
    }
	
	const validateField = (fieldName, value) => {
	  	let errors = {};
		let formValues = inputField.formValues;
		
		if (!formValues.first_name || !formValues.first_name.trim()) {
		  errors.first_name = "First Name is required";
		} else {
		  delete errors.first_name;
		}
		if (!formValues.last_name || !formValues.last_name.trim()) {
		  errors.last_name = "Last Name is required";
		} else {
		  delete errors.last_name;
		}
		if (!formValues.mother_name || !formValues.mother_name.trim()) {
		  errors.mother_name = "Mother Name is required";
		} else {
		  delete errors.mother_name;
		}
		if (!formValues.father_name || !formValues.father_name.trim()) {
		  errors.father_name = "Father Name is required";
		} else {
		  delete errors.father_name;
		}
		if (!formValues.family_income || !formValues.family_income.trim()) {
		  errors.family_income = "Faily Income is required";
		} else {
		  delete errors.family_income;
		}
		if (!formValues.school_name || !formValues.school_name.trim()) {
		  errors.school_name = "School Name is required";
		} else {
		  delete errors.school_name;
		}
		if (!formValues.board_name || !formValues.board_name.trim()) {
		  errors.board_name = "Borad Name is required";
		} else {
		  delete errors.board_name;
		}
		if (!formValues.cast_category || !formValues.cast_category.trim()) {
		  errors.cast_category = "Category is required";
		} else {
		  delete errors.cast_category;
		}
		if (!formValues.address || !formValues.address.trim()) {
		  errors.address = "Address is required";
		} else {
		  delete errors.address;
		}
		if (!formValues.city || !formValues.city.trim()) {
		  errors.city = "City Name is required";
		} else {
		  delete errors.city;
		}
		if (!formValues.district || !formValues.district.trim()) {
		  errors.district = "District Name is required";
		} else {
		  delete errors.city;
		}
		if (!formValues.phone_number || !formValues.phone_number.trim()) {
		  errors.phone_number = "Phone Nuber is required";
		} else if (!formValues.phone_number || !formValues.phone_number.match('[0-9]{10}') || (formValues.phone_number.length != 10)) {
		  errors.phone_number = "Please enter a valid Mobile Number";
		} else {
		  delete errors.phone_number;
		}
		if (!formValues.pin_code || !formValues.pin_code.trim()) {
		  errors.pin_code = "Pin Code is required";
		} else {
		  delete errors.pin_code;
		}
		const emailCond =	/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		if (!formValues.email || !formValues.email.trim()) {
		  errors.email = "Email is required";
		} else if (!formValues.email || !formValues.email.match(emailCond)) {
		  errors.email = "Please enter a valid email address";
		} else {
		  delete errors.email;
		}
		if (!formValues.news_letter || !formValues.news_letter.trim()) {
		  errors.news_letter = "Please select Terms & Conditions";
		} else {
		  delete errors.news_letter;
		}
		setValidation({errors});
		return errors;
	}
  function refreshPage() {
    window.location.reload(false);
  }
	
	let formErrorValues = Object.keys(validation).length ? validation.errors : {};
	console.log("formErrorValues", formErrorValues, validation);
	console.log("formTitle: ",formTitle,title);
  console.log("apiRes.statusType: ",apiRes.statusType);
  if(apiRes.statusType === ''){
  return (
    <div>
        <h3 className="contact-heading-text" style={{ color: theme.text }}>
          {formTitle}
        </h3>
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">            
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
                                <MDBCol md="6" className="row-block">
                                  <MDBInput
                                    wrapperClass="mb-4"
                                    label="First Name"
                                    size="lg"
                                    id="form1"
                                    type="text"
                        onChange={inputsHandler}
                        name="first_name"
                        className={formErrorValues.first_name ? 'is-invalid': ''}
                                  />
                        <label className={formErrorValues.first_name ? 'invalid-feedback': 'hide'}>{formErrorValues.first_name}</label>
                                </MDBCol>

                                <MDBCol md="6">
                                  <MDBInput
                                    wrapperClass="mb-4"
                                    label="Last Name"
                                    size="lg"
                                    id="form2"
                                    type="text"
                        name="last_name"
                        onChange={inputsHandler}
                        required
                        className={formErrorValues.last_name ? 'is-invalid': ''}
                                  />
                        <label className={formErrorValues.last_name ? 'invalid-feedback': 'hide'}>{formErrorValues.last_name}</label>
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
                        name="mother_name"	
                        onChange={inputsHandler}
                        required
                                    className={formErrorValues.mother_name ? 'is-invalid': ''}
                                  />
                        <label className={formErrorValues.mother_name ? 'invalid-feedback': 'hide'}>{formErrorValues.mother_name}</label>
                                </MDBCol>

                                <MDBCol md="6">
                                  <MDBInput
                                    wrapperClass="mb-4"
                                    label="Father Name"
                                    size="lg"
                                    id="form2"
                                    type="text"
                        name="father_name"
                        onChange={inputsHandler}
                        required
                                    className={formErrorValues.father_name ? 'is-invalid': ''}
                                  />
                        <label className={formErrorValues.father_name ? 'invalid-feedback': 'hide'}>{formErrorValues.father_name}</label>
                                </MDBCol>
                              </MDBRow>
                    <MDBRow>
                      <MDBCol md="12">
                        <MDBInput
                        wrapperClass="mb-4"
                        label="Annual Income (In Lakhs)"
                        size="lg"
                        id="form3"
                        type="text"
                        name="family_income"
                        onChange={inputsHandler}
                        required
                        className={formErrorValues.family_income ? 'is-invalid': ''}
                        />
                        <label className={formErrorValues.family_income ? 'invalid-feedback': 'hide'}>{formErrorValues.family_income}</label>
                       </MDBCol>
                              </MDBRow>
                    <MDBRow>
                      <MDBCol md="12">
                        <MDBInput
                        wrapperClass="mb-4"
                        label="School"
                        size="lg"
                        id="form3"
                        type="text"
                        name="school_name"
                        onChange={inputsHandler}
                        required
                        className={formErrorValues.school_name ? 'is-invalid': ''}
                        />
                        <label className={formErrorValues.school_name ? 'invalid-feedback': 'hide'}>{formErrorValues.school_name}</label>
                      </MDBCol>
                              </MDBRow>
                              <MDBRow className={formErrorValues.board_name ? 'is-invalid radio-group': ''}>
                                <div className="d-md-flex ustify-content-start align-items-center mb-4">
                                  <h6 class="fw-bold mb-0 me-4 label-header-radio">
                                    Board:{" "}
                                  </h6>
                                  <MDBRadio
                                    id="board_name1"
                                    value="CBSE"
                                    label="CBSE"
                        name="board_name"
                        onChange={inputsHandler}
                                    inline
                        className={formErrorValues.board_name ? 'is-invalid': ''}
                                  />
                                  <MDBRadio
                                    id="board_name2"
                                    value="ICSE"
                                    label="ICSE"
                        name="board_name"
                                    inline
                        onChange={inputsHandler}
                        className={formErrorValues.board_name ? 'is-invalid': ''}
                                  />

                                  <MDBRadio
                                    id="board_name3"
                                    value="BIHAR"
                                    label="BIHAR"
                        name="board_name"
                                    inline
                        onChange={inputsHandler}
                        className={formErrorValues.board_name ? 'is-invalid': ''}
                                  />
                                  <MDBRadio
                                    id="board_name4"
                                    value="Others"
                                    label="Others"
                        name="board_name"
                                    inline
                        onChange={inputsHandler}
                        className={formErrorValues.board_name ? 'is-invalid': ''}
                                  />
                        <label className={formErrorValues.board_name ? 'invalid-feedback': 'hide'}>{formErrorValues.board_name}</label>
                                </div>
                              </MDBRow>
                              <MDBRow className={formErrorValues.cast_category ? 'is-invalid radio-group': ''}>
                                <div className="d-md-flex ustify-content-start align-items-center mb-4">
                                  <h6 class="fw-bold mb-0 me-4 label-header-radio">
                                    Category:{" "}
                                  </h6>
                                  <MDBRadio
                                    id="cast_category1"
                                    value="General"
                                    label="General"
                        name="cast_category"
                                    inline
                        onChange={inputsHandler}
                        className={formErrorValues.cast_category ? 'is-invalid': ''}
                                  />
                                  <MDBRadio
                                    id="cast_category2"
                                    value="OBC"
                                    label="OBC"
                        name="cast_category"
                                    inline
                        onChange={inputsHandler}
                        className={formErrorValues.cast_category ? 'is-invalid': ''}
                                  />

                                  <MDBRadio
                                    id="cast_category3"
                                    value="SC"
                                    label="SC"
                        name="cast_category"
                                    inline
                        onChange={inputsHandler}
                        className={formErrorValues.cast_category ? 'is-invalid': ''}
                                  />
                                  <MDBRadio
                                    id="cast_category4"
                                    value="ST"
                                    label="ST"
                        name="cast_category"
                                    inline
                        onChange={inputsHandler}
                        className={formErrorValues.cast_category ? 'is-invalid': ''}
                                  />
                                  <MDBRadio
                                    id="cast_category5"
                                    value="Others"
                        name="cast_category"
                                    label="Others"
                                    inline
                        onChange={inputsHandler}
                        className={formErrorValues.cast_category ? 'is-invalid': ''}
                                  />
                          <label className={formErrorValues.cast_category ? 'invalid-feedback': 'hide'}>{formErrorValues.cast_category}</label>
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
                    <MDBRow>
                      <MDBCol md="12">
                        <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Address"
                        size="lg"
                        id="form6"
                        type="text"
                        name="address"
                        onChange={inputsHandler}
                        required
                        className={formErrorValues.address ? 'is-invalid': ''}
                        />
                        <label className={formErrorValues.address ? 'invalid-feedback': 'hide'}>{formErrorValues.address}</label>	
                      </MDBCol>
                      </MDBRow>
                              <MDBRow>
                                <MDBCol md="5">
                                  <MDBInput
                                    wrapperClass="mb-4"
                                    labelClass="text-white"
                                    label="City"
                                    size="lg"
                                    id="form6"
                                    type="text"
                        name="city"
                        onChange={inputsHandler}
                        required
                        className={formErrorValues.city ? 'is-invalid': ''}
                                  />
                          <label className={formErrorValues.city ? 'invalid-feedback': 'hide'}>{formErrorValues.city}</label>
                                </MDBCol>

                                <MDBCol md="7">
                                  <MDBInput
                                    wrapperClass="mb-4"
                                    labelClass="text-white"
                                    label="District"
                                    size="lg"
                                    id="form7"
                                    type="text"
                        name="district"
                        onChange={inputsHandler}
                        required
                                    className={formErrorValues.district ? 'is-invalid': ''}
                                  />
                          <label className={formErrorValues.district ? 'invalid-feedback': 'hide'}>{formErrorValues.district}</label>
                                </MDBCol>
                              </MDBRow>
                      <MDBRow>
                      <MDBCol md="12">
                        <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Pin Code"
                        size="lg"
                        id="form8"
                        type="text"
                        name="pin_code"
                        onChange={inputsHandler}
                        required
                        className={formErrorValues.pin_code ? 'is-invalid': ''}
                                  />
                          <label className={formErrorValues.pin_code ? 'invalid-feedback': 'hide'}>{formErrorValues.pin_code}</label>
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
                        name="country_code"
                        onChange={inputsHandler}
                                    value="+91"
                        disabled
                        required
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
                        name="phone_number"
                        onChange={inputsHandler}
                        required
                        className={formErrorValues.phone_number ? 'is-invalid': ''}
                                  />
                          <label className={formErrorValues.phone_number ? 'invalid-feedback': 'hide'}>{formErrorValues.phone_number}</label>
                                </MDBCol>
                              </MDBRow>
                    <MDBRow>
                      <MDBCol md="12">
                        <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Your Email"
                        size="lg"
                        id="form8"
                        type="email"
                        name="email"
                        onChange={inputsHandler}
                        required
                        className={formErrorValues.email ? 'is-invalid': ''}
                                  />
                          <label className={formErrorValues.email ? 'invalid-feedback': 'hide'}>{formErrorValues.email}</label>
                      </MDBCol>
                              </MDBRow>
                    <MDBRow className={formErrorValues.cast_category ? 'is-invalid checkbox-group': ''}>
                      <MDBCol md="12">
                        <MDBCheckbox
                        name="flexCheck"
                        id="flexCheckDefault"
                        labelClass="text-white mb-4"
                        label="I do accept the Terms and Conditions of your site."
                        value="accepted"
                        name="news_letter"
                        onChange={inputsHandler}
                        className={formErrorValues.news_letter ? 'is-invalid': ''}
                        />
                        <label className={formErrorValues.api ? 'invalid-feedback': 'hide'}style={{left:'-25px',width:'310px'}}>{formErrorValues.api}</label>
                      </MDBCol>
                    </MDBRow>
                    
                  <MDBBtn color="light" size="lg" onClick={submitButton}>
                      Register
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  </Fade>
</div>
  );
}else{
  return(
      <div>
        <h1 className="contact-heading-text" style={{ color: theme.text }}>
          {formTitle}
        </h1>
       <Fade bottom duration={1000} distance="40px">
        <div className="contact-heading-div">            
            <MDBContainer fluid className="h-custom">
              <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol col="12" className="m-5">
                  <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }} >
                    <MDBCardBody className="p-0">
                      <MDBRow>
                        <MDBCol md="6" className="p-5 bg-white">
                          <h4 className="fw-normal mb-5">{bodyMsg}</h4> 
                          <MDBRow>
                          <MDBCol md="12" className="p-5 bg-white">
                          <MDBBtn color="light" size="lg" onClick={refreshPage}>
                            {`${apiRes.statusType === status.exist  || apiRes.statusType === status.error ?  'Try Again' : 'Apply For Others'}`}
                        </MDBBtn>
                        </MDBCol>
                          </MDBRow>
                        </MDBCol>
                        <MDBCol md="6" className="bg-indigo p-5">
                          <h4 className="fw-normal mb-5 text-white" style={{ color: "#4835d4" }} >
                            We are available on whatsApp chat or mobile number
                          </h4> 
                          <MDBRow>
                          <MDBCol md="12" className="bg-indigo p-5">
                          <div className="resume-btn-div whatsApp-btn">
                            <Button
                              text="Message us on WhatsApp"
                              newTab={true}
                              href={`${phoneSection["whatsAppLink"]}${phoneSection["whatsAppNo"]}`}
                              theme={theme}
                              icon="fa-whatsapp"
                            />
                          
                          </div>
                          <p
                            className="fw-normal mb-5 text-white small-text"
                            style={{ color: theme.text }}
                          >
                            {`call us at ${phoneSection["subtitle"]}`}
                          </p>
                          </MDBCol>
                          </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          </div>
        </Fade>
      </div>
  );    
}
}

export default OnLineForm;
