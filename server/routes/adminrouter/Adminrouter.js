const express = require("express");
const Admincontroler = require("./../../controler/Admincontroler/Adminpercontroler");
const Authentication = require("./../../middleware/Authmiddleware");

const router = express.Router();

router.post("/api/admin", Admincontroler.adminpermission);

module.exports = router;
