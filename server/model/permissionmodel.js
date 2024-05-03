const mongoose = require("mongoose");

const permissionschema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  permissions: [
    {
      permission_name: String,
      permission_value: [Number],
    },
  ],
});

const Permission = new mongoose.model("Permission", permissionschema);

module.exports = Permission;
