const mongoos = require("mongoose");
const product = require("./productModel");
 
const orderSchema = new  mongoos.Schema({
    name:String,
    date :Date,
    products:[{
        quantity:Number,
        product_id:mongoos.Types.ObjectId,
        ref: product.productModel,
    }],
});

module.exports.orderSchema = orderSchema;
module.exports.orderModel = new mongoos.model('Order',orderSchema);