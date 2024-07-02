const express = require("express");

const { registerUser, loginUser } = require("../controller/auth.controller");

// CREATING ROUTES
const authRouter = express.Router();

// POST ROUTE FOR REGISTER
authRouter.post("/register", registerUser);

// POST ROUTE FOR LOGIN
authRouter.post("/login", loginUser);

module.exports = { authRouter };
