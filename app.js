const express = require("express");
const connectDB = require("./config/db");
const productRoute = require("./router/product/product");
const app = express();
require("dotenv").config();


connectDB();


app.use(express.json());
app.use("/api", productRoute);

app.listen(process.env.PORT, () => {
  console.log(`server runing on port ${process.env.PORT}`);



});
