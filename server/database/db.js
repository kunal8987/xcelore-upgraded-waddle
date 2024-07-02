const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongo Db Connected", mongoose.connection.host);
  } catch (error) {
    console.log("Error Form DataBase File:", error);
    console.log(error.message);
  }
};

module.exports = { connection };
