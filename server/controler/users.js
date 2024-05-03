const Users = require("./../model/Usermodel");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

exports.Register = async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  const file = req.file.filename;
  const hpassword = await bcrypt.hash(password, 10);
  const chpassword = await bcrypt.hash(cpassword, 10);
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(401).json({
        success: false,
        error: errors.array(),
        message: "Errors",
      });
    }
    const preuser = await Users.findOne({ email });
    if (preuser) {
      res.status(402).json({
        message: "the user is already exits",
      });
    } else {
      const newuser = await Users({
        name: name,
        email: email,
        phone: phone,
        password: hpassword,
        cpassword: chpassword,
        image: file,
      });
      const saveuser = await newuser.save();
      res.status(200).json({
        success: true,
        message: "user registration successfull",
        data: saveuser,
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
      message: err.message,
    });
  }
};

exports.Login = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "error",
      error: err,
    });
  }
};
