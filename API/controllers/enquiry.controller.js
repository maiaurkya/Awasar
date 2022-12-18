const Enquiries = require("../models/enquiry.model.js");

// Create and Save a new Enquiry
exports.create = (req, res) => {
	// Validate request
	  if (!req.body) {
	    res.status(400).send({
 	      statusType: 'error',
	      message: "Content can not be empty!"
	    });
	  }
		const defaultValue = {
			country_code: "+91"
		}

	  // Create a Enquiries
	  const enquiry = new Enquiries({
		first_name: req.body.first_name,
	    last_name : req.body.last_name,
  		mother_name : req.body.mother_name,
		father_name : req.body.father_name,
  		family_income : req.body.family_income,
  		school_name : req.body.school_name,
		board_name : req.body.board_name,
		cast_category : req.body.cast_category,
  		address : req.body.address,
		city : req.body.city,
		district: req.body.city,
		country_code: defaultValue.country_code,
		phone_number: req.body.phone_number,
  		pin_code : req.body.pin_code,
  		email : req.body.email,
		news_letter : req.body.news_letter,
  	  });

	  // Save Enquiries in the database
	  Enquiries.create(enquiry, (err, data) => {
		   try {
			  if (err)
				res.status(500).send({
				statusType: 'error',
				message: err.message || "Some error occurred while creating the enquiry."
			  });
			else res.send(data);
		   } catch(e){
			   	console.log(e);
				res.send(1);
		   }
	  });  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
 	Enquiries.getAll((err, data) => {
    		if (err)
      			res.status(500).send({
			statusType: 'error',
        		message: err.message || "Some error occurred while retrieving customers."
      			});
    		else if (data.length){
			res.send(data);
		}else{
			res.status(500).send({
                        	statusType: 'error',
                        	message: "No  Records found!"
                        });
		}
	}); 
};
// Find a single Customer with a customerId
exports.findOne = (req, res) => {
	console.log("findOne:",req.params);
	Enquiries.findById(req.params.selector, (err, data) => {
	    if (err) {
	      if (err.kind === "not_found") {
		res.status(200).send({
		  statusType: 'error',
		  message: `Not found enquiry with  ${req.params.selector}.`
		});
	      } else {
		res.status(500).send({
		  statusType: 'error',
		  message: "Error retrieving enquiry with  " + req.params.selector
		});
	      }
	    } else res.status(200).send({
		  statusType: 'success',
		  data: data,
		});
	  }); 
};

// Find a Admin with a userId
exports.findAdmin = (req, res) => {
	if (!req.body) {
	    res.status(400).send({
 	      statusType: 'error',
	      message: "Content can not be empty!"
	    });
	  }
        Enquiries.findAdminByUserId(req.body.userid, (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  statusType: 'error',
                  message: `Not found Admin with userid ${req.params.userId}.`
                });
              } else {
                res.status(500).send({
                  statusType: 'error',
                  message: "Error retrieving Admin with userid " + req.params.userId
                });
              }
            } else res.send(data);
          });
};

// Find a single Customer with a customerId
exports.findTopics = (req, res) => {
        Enquiries.findTopicsById(req.params.courseId, (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  statusType: 'error',
                  message: `Not found Course with id ${req.params.courseId}.`
                });
              } else {
                res.status(500).send({
                  statusType: 'error',
                  message: "Error retrieving Course with id " + req.params.courseId
                });
              }
            } else res.send(data);
          });
};
// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
	// Validate Request
	  if (!req.body) {
	    res.status(400).send({
	      statusType: 'error',
	      message: "Content can not be empty!"
	    });
	  }

	  Enquiries.updateById(
	    req.params.selector,
	    {
	    center:req.body.center,
	    address:req.body.address,
	    examDateTime:req.body.examDateTime,
	    },
	    (err, data) => {
	      if (err) {
		if (err.kind === "not_found") {
		  res.status(200).send({
  		    statusType: 'error',
		    message: `Not found enquiry with  ${req.params.selector}.`
		  });
		} else {
		  res.status(500).send({
		    statusType: 'error',
		    message: "Error updating enquiry with  " + req.params.selector
		  });
		}
	      } else res.status(200).send({
		  statusType: 'success',
		  data: data,
		});
	    }
	  ); 
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
	Customer.remove(req.params.customerId, (err, data) => {
	    if (err) {
	      if (err.kind === "not_found") {
		res.status(404).send({
		  statusType: 'error',
		  message: `Not found Customer with id ${req.params.customerId}.`
		});
	      } else {
		res.status(500).send({
		  statusType: 'error',
		  message: "Could not delete Customer with id " + req.params.customerId
		});
	      }
	    } else res.send({ message: `Customer was deleted successfully!` });
	  }); 
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
	Customer.removeAll((err, data) => {
	    if (err)
	      res.status(500).send({
		statusType: 'error',
		message: err.message || "Some error occurred while removing all customers."
	      });
	    else res.send({ message: `All Customers were deleted successfully!` });
	  });  
};

