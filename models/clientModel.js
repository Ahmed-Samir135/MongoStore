const mongoos = require("mongoose");
const order = require("./orderModel");

const clientSchema = new  mongoos.Schema({
    name:String,
    address:String,
    mobileNumber:[String],
    email:String,
    orders:[order.orderSchema],
});


module.exports.clientSchema = clientSchema;
module.exports.clinetModel = new mongoos.model('Client',clientSchema);