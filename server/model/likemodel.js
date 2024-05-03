const mongoose = require("mongoose");

const likeschema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

const Like = new mongoose.model("Like", likeschema);
module.exports = Like;
