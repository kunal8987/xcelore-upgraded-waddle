const express = require("express");
const { connection } = require("./database/db");
const dotenv = require("dotenv");
const { authRouter } = require("./routes/auth.routes");
const cors = require("cors");
const { userRouter } = require("./routes/user.routes");

dotenv.config();

//DEFINE THE EXPRESS APP
let app = express();

//MIDDLEWARE CONFIGURATION
app.use(express.json());
app.use(cors());

//PORT CONFIGURATION
let port = process.env.PORT || 4300;

// API ROUTES
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

//LISTING THE SERVER
app.listen(port, async (req, res) => {
  try {
    await connection();
    console.log("server is listening on port", port);
  } catch (error) {
    console.log("Error From The Index File ");
    console.log(error.message);
  }
});
