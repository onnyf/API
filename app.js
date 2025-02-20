const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db")


connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server runing on port ${process.env.PORT}`);


});
