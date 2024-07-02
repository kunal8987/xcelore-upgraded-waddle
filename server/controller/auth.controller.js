const { Auth } = require("../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();

//REGISTER USER FUNCTION
const registerUser = async (req, res) => {
  try {
    let { firstName, lastName, email, password } = req.body;

    let existingUser = await Auth.findOne({ email });

    if (existingUser) {
      res.status(401).send({
        success: false,
        message: "User With Email Already Exists",
      });
    }

    // HASH AND SALT THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 7);

    // SAVE AUTH DETAILS TO THE DATABASE
    const newUser = new Auth({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).send({
      success: true,
      message: "User Registered Successfully.",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error From Registered Auth Controller",
      error: error.massage,
    });
  }
};

// LOGIN USER FUNCTION

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    //FINDING THE EXISTING USER
    const user = await Auth.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    //COMPARING THE PASSWORD
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(404).send({
        success: false,
        message: "Invalid Password",
      });
    }
    // GENERATE A JWT TOKEN (CUSTOMIZE THIS PART)
    const token = jwt.sign(
      { authId: user._id, authRole: user.role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "Login Successful",
      token,
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error From Login Auth Controller",
      error: error.massage,
    });
  }
};

module.exports = { registerUser, loginUser };
