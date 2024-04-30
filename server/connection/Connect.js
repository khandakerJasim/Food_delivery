const mongoose = require("mongoose");

const Connect = async (DATABASE) => {
  try {
    const option = {
      DBNAME: process.env.DBNAME,
    };
    await mongoose.connect(DATABASE, option);
    console.log(`mongodb connect successfully`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = Connect;
