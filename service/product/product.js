const createProduct =async(productObj)=>{
 const newProduct = await product.create(productObj)
 

 return newProduct;
}


const fetchAllProduct =async(params)=>{

}
const fetchProductById =async(productId)=>{

}
module.exports = {createProduct, fetchAllProduct, fetchProductById}
