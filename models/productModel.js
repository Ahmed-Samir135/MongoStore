const mongoos = require("mongoose");

const productSchema = new  mongoos.Schema({
    name:String,
    price:Number,
    description:String,  
});

module.exports.productSchema = productSchema;
module.exports.productModel = mongoos.model('Product',productSchema);