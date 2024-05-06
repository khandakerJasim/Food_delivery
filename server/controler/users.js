const Users = require("./../model/Usermodel");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const Blacklist = require("./../model/Blacklistmodel");

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
const Generatetoken = (user) => {
  const generatetoken = jwt.sign(user, process.env.SECRET, {
    expiresIn: "24h",
  });

  return generatetoken;
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const error = validationResult(req);
    if (!error) {
      res.status(401).json({
        succss: true,
        message: "error",
        error: error.array(),
      });
    }

    const finduser = await Users.findOne({ email });
    if (!finduser) {
      res.status(402).json({
        success: false,
        message: "user not found",
      });
    }
    const matchpassword = await bcrypt.compare(password, finduser.password);

    if (!matchpassword) {
      res.status(403).json({
        success: false,
        message: "password and email is not match",
      });
    }

    const token = await Generatetoken({ user: finduser });
    res.status(200).json({
      success: true,
      message: "token generate successfully",
      user: finduser,
      token: token,
      tokenType: "Bearer",
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "error",
      error: err,
    });
  }
};

exports.getprofile = async (req, res) => {
  try {
    const user_id = req.user._id;
    const getuser = await Users.findOne({ _id: user_id });
    res.status(200).json({
      success: true,
      message: "user get successfully",
      data: getuser,
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      message: "error",
      error: err,
    });
  }
};

exports.Logout = async (req, res) => {
  try {
    const token =
      req.body.token || req.body.query || req.headers["authorization"];
    const bearer = token.split(" ");
    const bearertoken = bearer[1];

    const newblacklist = new Blacklist({
      token: bearertoken,
    });
    const savetoken = await newblacklist.save();
    res.status(200).json({
      success: true,
      message: "you are logged out",
      data: savetoken,
    });
    //res.setHeader("clear-header-data", "'cookie','storage'");
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "logout not found",
      error: err,
    });
  }
};
