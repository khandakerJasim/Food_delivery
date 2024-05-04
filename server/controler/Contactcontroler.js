const Contact = require("./../model/Contactmodel");

exports.Sendcontact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const newuser = await Contact({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
    const saveuser = await newuser.save();

    res.status(200).json({
      success: true,
      message: "contact page message send successfully",
      data: saveuser,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "error",
      error: err,
    });
  }
};
