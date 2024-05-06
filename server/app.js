const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const DATABASE = process.env.DATABASE;
const Connect = require("./connection/Connect");
const Foodrouter = require("./routes/Router");
const Authrouter = require("./routes/UserRouter");
const Urouter = require("./routes/urouter");
const Contactrouter = require("./routes/Contactrouter");
const adminrouter = require("./routes/adminrouter/Adminrouter");

const app = express();
app.use(cors());
//database connect
Connect(DATABASE);

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploads", express.static("./uploads"));
app.use(Foodrouter);
app.use(Authrouter);
app.use(Urouter);
app.use(Contactrouter);
//use admin router
app.use(adminrouter);

module.exports = app;
