const express = require("express");
const contact = require("./../controler/Contactcontroler");

const router = express.Router();

router.post("/api/contact", contact.Sendcontact);

module.exports = router;
