const jwt = require("jsonwebtoken");

const Verifytoken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    res.status(401).json({
      success: false,
      message: "token not found please required token",
    });
  }
  try {
    const bearer = token.split(" ");
    const bearertoken = bearer[1];
    const decodeddata = jwt.verify(bearertoken, process.env.SECRET);
    req.user = decodeddata.user;
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "validation faild",
      err: err,
    });
  }
  return next();
};

module.exports = Verifytoken;
