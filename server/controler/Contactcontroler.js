const Contact = require("./../model/Contactmodel");

exports.Sendcontact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const newuser = new Contact({
      name,
      email,
      phone,
      message,
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
      message: "contact valid fail",
      error: err,
    });
  }
};
