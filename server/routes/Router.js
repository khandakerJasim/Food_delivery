const express = require("express");
const upload = require("./../multerconfig/Storage");
const Foodcontroler = require("./../controler/Foodcontroler");
const router = express.Router();

router.post("/api/post", upload.single("image"), Foodcontroler.postfood);
router.get("/api/get", Foodcontroler.getfood);
router.get("/api/single/:id", Foodcontroler.singledata);
router.delete("/api/delete/:id", Foodcontroler.deletedata);

router.put("/api/update/:id", Foodcontroler.updatedata);

module.exports = router;
