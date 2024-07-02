const express = require("express");

// DEPENDENCY FUNCTION IMPORTS
const {
  createProfiles,
  getUser,
  updateProfile,
  deleteProfile,
  getAllUser,
} = require("../controller/user.controller");

//MIDDLEWARE FUNCTION IMPORTS
const { requireSignIn, isAdmin } = require("../middleware/auth.middleware");

// CREATING ROUTES
let userRouter = express.Router();

// POST ROUTE
userRouter.post("/create-profile", requireSignIn, isAdmin, createProfiles);

// GET ROUTE
userRouter.get("/get-profile", requireSignIn, getUser);
userRouter.get("/get-all-profile", requireSignIn, isAdmin, getAllUser);

// PATCH ROUTE
userRouter.patch("/update-profile/:id", requireSignIn, isAdmin, updateProfile);

// DELETE ROUTE
userRouter.delete("/delete-profile/:id", requireSignIn, isAdmin, deleteProfile);

module.exports = { userRouter };
