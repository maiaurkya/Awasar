const sql = require("./db.js");
const sendMail = require("./mailer.model.js");
const mailContent = require("./mailContent.js");
const mailConfig = require("../config/mail.config.js");

// constructor
const Enquiries = function(enquiries) {
  	this.first_name = enquiries.first_name;
	this.last_name = enquiries.last_name;
  	this.mother_name = enquiries.mother_name;
	this.father_name = enquiries.father_name;
  	this.family_income = enquiries.family_income;
  	this.school_name = enquiries.school_name;
	this.board_name = enquiries.board_name;
	this.cast_category = enquiries.cast_category;
  	this.address = enquiries.address;
	this.city = enquiries.city;
	this.district = enquiries.district;
	this.country_code = enquiries.country_code;
	this.phone_number = enquiries.phone_number;
  	this.pin_code = enquiries.pin_code;
  	this.email = enquiries.email;
	this.news_letter = enquiries.news_letter;
};

Enquiries.create = (newEnquiries, result) => {
  sql.query(`SELECT * FROM enquiries WHERE (phone_number='${newEnquiries.phone_number}' or email='${newEnquiries.email}')`, (err, res) => {
  try{  
  if (err) {
      console.log("errorssssssssssssssssssss: ", err);
      result(err, null);
      return;
    }
	console.log(res.length);
    if (res.length) {
      result(null, { id: res[0], statusType: 'exist', data: res });
       return;
    }	
	  
  
  
  sql.query("INSERT INTO enquiries SET ?", newEnquiries, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created enquiries: ", { id: res.insertId, ...newEnquiries });
    result(null, { id: res.insertId, ...newEnquiries, statusType: 'success' });
    var message = {
	  from: mailConfig.FROM,
	  to: newEnquiries.email,
	  subject: 'AWASAR-2023: Got your Application',
	  text: 'Please confirm your email',
	  html: mailContent({
	  first_name: newEnquiries.first_name,
	  mobile: newEnquiries.phone_number,
	  mobile: newEnquiries.email,
	  first_para: "You have successfully submitted your application for ATSE-2023 ( Prelims/stage-1) and it is subject to further scrutiny in terms of prescribed eligibility conditions.",
	  second_para: "We will send you another mail regarding your Admit Card very soon. Keep this below information handy.",
	  third_para: `Registered Mobile : ${newEnquiries.phone_number}`,
	  fourth_para: `Registered EMail : ${newEnquiries.email}`,
	  fifth_para: "Please find the attached past year paper of ATSE-2022",
	  }),
	  attachments: [
	    {   filename: 'https://www.awasaredu.com/static/media/ATSE-2022.4b117855.pdf',
		content: 'Past-Paper'
	    }
	  ]
	};
	console.log(message);
	const test = sendMail(message);
     return;
  });
  }catch(e){
  	console.log(e);
  }
});
};

const findBySelector = (value1, value2, result) => {
  sql.query(`SELECT * FROM enquiries WHERE (phone_number='${value1}' or email='${value2}')`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      return result(null , res[0]);
    }

    // not found enquiries with the id
    result({ kind: "not_found" }, null);
  });
};

Enquiries.findById = (EnquiryId, result) => {
console.log("findById:",EnquiryId);
  sql.query(`SELECT * FROM enquiries WHERE (phone_number='${EnquiryId}' or email='${EnquiryId}')`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found enquiries with the id
    result({ kind: "not_found" }, null);
  });
};

Enquiries.findAdminByUserId = (EnquiryId, result) => {
console.log("findAdminByUserId:",EnquiryId);
  sql.query(`SELECT * FROM admin WHERE (userid='${EnquiryId}' and status=1)`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found userid: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found enquiries with the id
    result({ kind: "not_found" }, null);
  });
};

Enquiries.getAll = result => {
  sql.query("SELECT * FROM enquiries", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("enquiries: ", res);
    result(null, res);
  });
};

Enquiries.updateById = (id, enquiries, result) => {
console.log("enquiries", enquiries)
  sql.query(
    `UPDATE enquiries SET center = '${enquiries.center}', centerAddress = '${enquiries.address}', ExamDateTime = '${enquiries.examDateTime}' WHERE (phone_number = '${id}' or email = '${id}')`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found enquiries with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated enquiries: ", { id: id, ...enquiries });
      result(null, { id: id, ...enquiries });
    }
  );
};

Enquiries.remove = (id, result) => {
  sql.query("DELETE FROM enquiries WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found enquiries with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted enquiries with id: ", id);
    result(null, res);
  });
};

Enquiries.removeAll = result => {
  sql.query("DELETE FROM enquiries", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} enquiries`);
    result(null, res);
  });
};

module.exports = Enquiries;

