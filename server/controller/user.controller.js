const { User } = require("../models/user.model");

//CREATE PROFILE FUNCTION
const createProfiles = async (req, res) => {
  try {
    let user = new User(req.body);
    // console.log(user);
    await user.save();

    res.status(200).send({
      success: true,
      message: "User Profile Created Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error Form Create Profile User Controller",
      error: error.message,
    });
  }
};

//GET USER PROFILE FUNCTION
const getUser = async (req, res) => {
  try {
    //FIND THE USER PROFILE
    let profile = await User.find({ authId: req.body.authId });

    if (req.body.authId !== profile.authId) {
      res.status(401).send({
        success: false,
        message: "You Are Not The Authorize User ",
      });
    }
    res.status(200).send({
      success: true,
      message: "User Profile Found Successfully",
      profile,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error Form Get Profile User Controller",
      error: error.message,
    });
  }
};

//GET ALL USER PROFILE FUNCTION
const getAllUser = async (req, res) => {
  try {
    //FIND THE USER PROFILE
    let profile = await User.find();
    res.status(200).send({
      success: true,
      message: "User Profile Found Successfully",
      count: profile.length,
      profile,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error Form Get All Profile User Controller",
      error: error.message,
    });
  }
};

//UPDATE PROFILE FUNCTION
const updateProfile = async (req, res) => {
  try {
    //GETTING THE PROFILE ID THROUGH REQ PARAMS
    let { id } = req.params;

    //FINDING THE PROFILE BY PID
    let profile = await User.findOne({ _id: id });

    if (!profile) {
      res.status(404).send({
        success: false,
        message: "Profile Not Found",
      });
    }

    //AUTHENTICATE THE USER FOR UPDATE
    if (req.body.authId !== profile.authId) {
      res.status(404).send({
        success: false,
        message: "You Are Not A Authorize Person To Do This Action",
      });
    } else {
      //UPDATE THE PROFILE
      let updateProfile = await User.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.status(200).send({
        success: true,
        message: "Profile Updated Successfully",
        updateProfile,
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error Form Update Profile User Controller",
      error: error.message,
    });
  }
};

//DELETE PROFILE FUNCTION
const deleteProfile = async (req, res) => {
  try {
    //GETTING THE PROFILE ID THROUGH REQ PARAMS
    let { id } = req.params;

    //FINDING THE PROFILE BY ID
    let profile = await User.findOne({ _id: id });

    if (!profile) {
      res.status(404).send({
        success: false,
        message: "Profile Not Found",
      });
    }

    //AUTHENTICATE THE USER FOR DELETE
    if (req.body.authId !== profile.authId) {
      res.status(404).send({
        success: false,
        message: "You Are Not A Authorize Person To Do This Action",
      });
    } else {
      //DELETE THE PROFILE
      await User.findByIdAndDelete({ _id: id });
      res.status(200).send({
        success: true,
        message: "Profile Deleted Successfully",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error Form Delete Profile User Controller",
      error: error.message,
    });
  }
};

module.exports = {
  createProfiles,
  getAllUser,
  getUser,
  updateProfile,
  deleteProfile,
};
