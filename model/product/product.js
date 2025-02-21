const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productTitle : {type: String, require: true},
    productPrice : {type : Number, require: true},
    productDescription :{type: String, require: true},
    productCategory :{type:String, require:true},
})


module.exports = mongoose.model("product", productSchema)