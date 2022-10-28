var express = require('express');
var router = express.Router();
  const enquiries = require("../controllers/enquiry.controller.js");
	console.log("Chandan");
  // Create a new Customer
  router.post("/create", enquiries.create);

  // Retrieve all Customers
  router.get("/all", enquiries.findAll);

  // Retrieve a single Customer with customerId
  router.get("/customers/:customerId", enquiries.findOne);

  // Update a Customer with customerId
  //router.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  //router.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  //router.delete("/customers", customers.deleteAll);
module.exports = router;
