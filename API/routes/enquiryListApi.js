var express = require('express');
var router = express.Router();
  const enquiries = require("../controllers/enquiry.controller.js");
	console.log("Chandan");
  // Create a new Customer
  router.post("/create", enquiries.create);

  // Retrieve all Customers
  router.get("/all", enquiries.findAll);
  
  // Retrieve admin details
  router.post("/authUser", enquiries.create);

  // Retrieve a single Customer with customerId
  router.get("/getEnquiryData/:selector", enquiries.findOne);

  // Update a Customer with customerId
  router.put("/updateCenter/:selector", enquiries.update);

  // Delete a Customer with customerId
  //router.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  //router.delete("/customers", customers.deleteAll);
module.exports = router;
