const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Connection made...")
    } catch (error) {
      console.error("mongoDB Connection Failed ", error.message)  
    }
}


module.exports = connectDB;