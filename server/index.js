const express = require("express");
const { connection } = require("./database/db");
const dotenv = require("dotenv");
const { authRouter } = require("./routes/auth.routes");

dotenv.config();


let app = express();


app.use(express.json())


let port = process.env.PORT || 4300

app.use('/api/v1/auth', authRouter)

app.listen(port, async (req, res) => {
  try {
    await connection()
    console.log('server is listening on port' , port);
  } catch (error) {
    console.log("Error From The Index File ");
    console.log(error.message);
  }
});
