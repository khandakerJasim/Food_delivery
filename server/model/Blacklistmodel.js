const mongoose = require("mongoose");

const blackschema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blacklist = new mongoose.model("Blacklist", blackschema);

module.exports = Blacklist;
