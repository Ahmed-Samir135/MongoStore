const mongoos = require("mongoose");

const productSchema = new  mongoos.Schema({
    
    name:{
        type:String,
        required:[true,"Enter product name"]
    },
    description:{
      type:String,
      required:[true,"Enter Product description"]
    },
    StretchedLength:[
        {
            length:{
                type:String
            },
            quantity:{
                type:Number
            }
        }
    ],
    Density:[
        {
            amount:{
                type:Number
            },
            quantity:{
                type:Number
            }
        }
    ],
    shipFrom:[
        {
            location:{
                type:String
            },
            available:{
                type:Boolean,
                default:false
            }
        }
    ],
    price:{
        type:Number
        },
    createdAt:{
        type:Date,
        default:Date.now
        },
    sale:{
        status:{
        type:Boolean,
        default:false
        },
        percent:{
            type:Number,
            default:0
        }
    },
    quantity:{
        type:Number
    }
});

module.exports.productSchema = productSchema;
module.exports.productModel = mongoos.model('Product',productSchema);