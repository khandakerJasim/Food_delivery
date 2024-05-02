const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const DATABASE = process.env.DATABASE;
const Connect = require("./connection/Connect");
const Foodrouter = require("./routes/Router");

const app = express();
app.use(cors());
//database connect
Connect(DATABASE);

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploads", express.static("./uploads"));
app.use(Foodrouter);

module.exports = app;
