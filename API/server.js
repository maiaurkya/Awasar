const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Awasar application." });
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

