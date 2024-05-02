const mongoose = require("mongoose");

const categoryschema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Category = new mongoose.model("category", categoryschema);

module.exports = Category;
