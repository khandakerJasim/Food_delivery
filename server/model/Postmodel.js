const mongoose = require("mongoose");

const postschema = new mongoose.Schema({
  tite: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  catagories: {
    type: Array,
    required: true,
  },
});

const Post = new mongoose.model("Post", postschema);

module.exports = Post;
