const sql = require("./db.js");

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
	console.log("newEnquiries: ",newEnquiries, newEnquiries.phone_number);
  sql.query(`SELECT * FROM enquiries WHERE (phone_number='${newEnquiries.phone_number}' || email='${newEnquiries.email}')`, (err, res) => {
  try{  
  if (err) {
      console.log("errorssssssssssssssssssss: ", err);
      result(err, null);
      return;
    }
	console.log(res.length);
    if (res.length) {
      result(null, { id: res[0], statusType: 'exist' });
    }	
	  
  
  
  sql.query("INSERT INTO enquiries SET ?", newEnquiries, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created enquiries: ", { id: res.insertId, ...newEnquiries });
    result(null, { id: res.insertId, ...newEnquiries, statusType: 'success' });
  });
  }catch(e){
  	console.log(e);
  }
});
};

const findBySelector = (value1, value2, result) => {
  sql.query(`SELECT * FROM enquiries WHERE (phone_number='${value1}' || email='${value2}')`, (err, res) => {
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
  sql.query(`SELECT * FROM enquiries WHERE id = ${EnquiryId}`, (err, res) => {
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
  sql.query(
    "UPDATE enquiries SET email = ?, name = ?, active = ? WHERE id = ?",
    [enquiries.email, enquiries.name, enquiries.active, id],
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

