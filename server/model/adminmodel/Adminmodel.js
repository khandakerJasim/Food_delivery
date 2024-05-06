const mongoose = require("mongoose");

const adminpermissoinschema = new mongoose.Schema({
  permission_name: {
    type: String,
    required: true,
  },
  isdefault: {
    type: Number,
    default: 0, //0-not default 1-default
  },
});

const Adminpermission = new mongoose.model(
  "Adminpermission",
  adminpermissoinschema
);

module.exports = Adminpermission;
