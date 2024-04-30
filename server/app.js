const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
const DATABASE = process.env.DATABASE;
const Connect = require("./connection/Connect");
const Foodrouter = require("./routes/Router");
const app = express();
//cors setup
app.use(cors());

//database connect
Connect(DATABASE);
//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(Foodrouter);

module.exports = app;
