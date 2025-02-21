const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const productRoute = require("./router/product/product");


connectDB();


app.use(express.json());
app.use("/api", productRoute)

app.listen(process.env.PORT, () => {
  console.log(`server runing on port ${process.env.PORT}`);



});
