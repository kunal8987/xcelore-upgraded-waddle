const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      lowercase: true,
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

const Auth = mongoose.model("Auth", authSchema);

module.exports = { Auth };
