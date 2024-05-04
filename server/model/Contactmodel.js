const mongoose = require("mongoose");
const validator = require("email-validator");

const contactschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: function () {
        return validator.validate(this.email);
      },
    },
    phone: {
      type: String,
      required: true,
      minLength: 11,
      maxLength: 11,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact = new mongoose.model("Contact", contactschema);
module.exports = Contact;
