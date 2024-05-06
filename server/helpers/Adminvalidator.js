const { check } = require("express-validator");

exports.Adminvalidator = [
  check("permisson_name", "admin permission name is required").not().isEmpty(),
];
