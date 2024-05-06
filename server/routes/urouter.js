const express = require("express");
const Ucontroler = require("./../controler/users");
const {
  Ragistrationvalidation,
  Loginvalidator,
} = require("./../helpers/Validator");
const upload = require("./../multerconfig/Storage");
const Verifytoken = require("./../middleware/Authmiddleware");

const router = express.Router();

router.post(
  "/api/user",
  upload.single("image"),
  Ragistrationvalidation,
  Ucontroler.Register
);

router.post("/api/login", Loginvalidator, Ucontroler.Login);

router.get("/api/profile", Verifytoken, Ucontroler.getprofile);
router.get("/api/logout", Verifytoken, Ucontroler.Logout);

module.exports = router;
