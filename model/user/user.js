const mongoose = require ("mongoose");
const userSchema = new mongoose.Schema ({


    Name : {type : String, require : true},
    Email : {type : String, require : true, unique:true},
    Password : {type : String, require : true},
    Address: {type: String, require: true},
    

})

module.exports = mongoose.model("user", userSchema)