const { check } = require("express-validator");

exports.Ragistrationvalidation = [
  check("name", "please name is required").not().isEmpty(),
  check("email", "please valid email is reqiured ")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("phone", "mobile number should be contain 11 digit").isLength({
    min: 11,
    max: 11,
  }),
  check(
    "password",
    "password required graterthan 6 character 1 is upper 1 is lower,1 is number and 1 is special character "
  ).isStrongPassword({
    minUppercase: 1,
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }),
  check(
    "cpassword",
    "cpassword required graterthan 6 character 1 is upper 1 is lower,1 is number and 1 is special character "
  ).isStrongPassword({
    minUppercase: 1,
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }),
  check("image")
    .custom((value, { req }) => {
      if (
        req.file.mimetype === "image/jpg" ||
        req.file.mimetype === "image/jpeg" ||
        req.file.mimetype === "image/png"
      ) {
        return true;
      } else {
        return false;
      }
    })
    .withMessage("please upload jpg ,jpeg and png files"),
];

exports.Loginvalidator = [
  check("email", "please required valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),

  check("password", "please required password").not().isEmpty(),
];
