const mongoose = require("mongoose");
const product = require("../../model/product/product");

const createProduct =async(productObj)=>{
 const newProduct = await product.create(productObj);
 
return newProduct;
}


const fetchAllProducts =async(params)=>{
    const products = await product.find();
    return products;

}
const fetchProductById =async(productId)=>{

}
module.exports = {createProduct, fetchAllProducts,}
