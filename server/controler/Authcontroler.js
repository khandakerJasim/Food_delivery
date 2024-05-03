const User = require("./../model/Authschema");
const bcrypt = require("bcrypt");

exports.Register = async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  const file = req.file.filename;
  const hpassword = await bcrypt.hash(password, 10);
  const chasspassword = await bcrypt.hash(password, 10);
  try {
    const preuser = await User.findOne({ email });
    if (preuser) {
      res.status(401).json({
        message: "the user is already exists",
      });
    } else {
      const newuser = await User({
        name: name,
        email: email,
        password: hpassword,
        cpassword: chasspassword,
        phone: phone,
        image: file,
      });
      const saveuser = await newuser.save();

      res.status(200).json({
        message: "user Registration successfully",
        success: true,
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
