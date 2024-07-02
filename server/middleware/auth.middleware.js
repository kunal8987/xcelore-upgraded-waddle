const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { Auth } = require("../models/auth.model");

dotenv.config();

const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    req.body.authId = decode.authId;
    req.body.authRole = decode.authRole;

    next();
  } catch (error) {
    console.log(error);
  }
};

// FOR ADMIN ONLY

const isAdmin = async (req, res, next) => {
  try {
    const user = await Auth.findById(req.body.authId);
    if (user.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    // console.log(error);
    res.status(401).send({
      success: false,
      error: error.message,
      message: "Error in admin middleware",
    });
  }
};

module.exports = { isAdmin, requireSignIn };
