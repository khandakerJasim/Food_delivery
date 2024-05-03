const express = require("express");
const Ucontroler = require("./../controler/users");
const {
  Ragistrationvalidation,
  Loginvalidator,
} = require("./../helpers/Validator");
const upload = require("./../multerconfig/Storage");

const router = express.Router();

router.post(
  "/api/user",
  upload.single("image"),
  Ragistrationvalidation,
  Ucontroler.Register
);

router.post("/api/login", Loginvalidator, Ucontroler.Login);

module.exports = router;