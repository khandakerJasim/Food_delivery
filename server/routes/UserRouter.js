const express = require("express");
const Authcontroler = require("./../controler/Authcontroler");
const upload = require("./../multerconfig/Storage");

const router = express.Router();

router.post("/api/register", upload.single("image"), Authcontroler.Register);

module.exports = router;
