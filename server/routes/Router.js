const express = require("express");
const upload = require("./../multerconfig/Storage");
const Foodcontroler = require("./../controler/Foodcontroler");
const category = require("./../controler/Categorycontroler");
const router = express.Router();

router.post("/api/post", upload.single("image"), Foodcontroler.postfood);
router.get("/api/get", Foodcontroler.getfood);
router.get("/api/single/:id", Foodcontroler.singledata);
router.delete("/api/delete/:id", Foodcontroler.deletedata);
router.put("/api/update/:id", Foodcontroler.updatedata);

//category router

router.post("/api/postcat", upload.single("image"), category.Categorypost);

module.exports = router;
