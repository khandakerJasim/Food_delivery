const mongoose = require("mongoose");

const categoryschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = new mongoose.model("category", categoryschema);
module.exports = Category;
