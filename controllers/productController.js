var productModel = require("./../models/productModel");

module.exports.getallProducts = async (req,res) =>{
    try{
    var products = await productModel.productModel.find();
    res.status(200).json(
        {status:"success",
        results:products.length,
        data:products
    });
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err,
        });
    }
}

module.exports.createProduct = async (req,res) =>{
    try{
    var newProduct = await productModel.productModel.create(req.body);
    res.status(200).json({
        status:"success",
        data:newProduct
    });
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    };
}

module.exports.getProduct = async(req,res) => {
    try{
    var product = await productModel.productModel.findById(req.params.id);
    res.status(200).json(
        {
            status:"success",
            data:product
        }
    );
    }catch(err){
        res.status(400).json(
            {
                status:"fail",
                message:err
            }
        )   
    }
}

module.exports.updateProduct = async (req,res) =>{
    try{
        var product = await productModel.productModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
            res.status(200).json(
            {
                status:"success",
                data:product
            }
        );
        }catch(err){
            res.status(400).json(
                {
                    status:"fail",
                    message:err
                }
            )   
        }
}
module.exports.deleteProduct = async (req,res) =>{
    try{
        var product = await productModel.productModel.findByIdAndDelete(req.params.id);
            res.status(204).json(
            {
                status:"success",
                data:product
            }
        );
        }catch(err){
            res.status(400).json(
                {
                    status:"fail",
                    message:err
                }
            )   
        }
}