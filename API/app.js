const express = require("express");
const bodyParser = require("body-parser");
var enquiryAPIRouter = require("./routes/enquiryListApi");
var cors = require("cors");
const port = 3001;
const hostname = '0.0.0.0';

app = express();
app.use(bodyParser.urlencoded({ extended: false, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));
app.use(cors());

app.use('/enquiry', enquiryAPIRouter);
app.use("/", (req, res) => {
    res.status(404).send({ status_msg: "404 Method Not found", msg: "Method Not Found" });
});

app.listen(3001, () => {
    console.log("listening on port 3001");
});
