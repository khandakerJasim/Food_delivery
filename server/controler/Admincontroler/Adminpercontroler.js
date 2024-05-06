const Adminpermission = require("./../../model/adminmodel/Adminmodel");
const { validationResult } = require("express-validator");

exports.adminpermission = async (req, res) => {
  const { permission_name } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(401).json({
        success: false,
        error: errors.array(),
        message: "Errors",
      });
    }

    const isExits = await Adminpermission.findOne({ permission_name });

    if (isExits) {
      res.status(402).json({
        success: true,
        message: "the permission user is already exits",
      });
    }
    var obj = {
      permission_name,
    };
    if (req.body.default) {
      obj.isdefault = parseInt(req.body.default);
    }

    const permission = new Adminpermission(obj);
    const savepermission = await permission.save();

    res.status(200).json({
      success: true,
      message: "permission api create successfully",
      data: savepermission,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "admin permission failed ",
      error: err,
    });
  }
};
