var express = require('express');
var router = express.Router();

var router = express.Router();
  const course = require("../controllers/course.controller.js");

  // Create a new Customer
  router.post("/create", course.create);

  // Retrieve all Customers
  router.get("/course-list", course.findAll);

  // Retrieve a single Customer with customerId
  router.get("/course/:courseId", course.findOne);
 
  // Retrieve all topic list for courseId
  router.get("/topic-details/:courseId", course.findTopics);
module.exports = router;
