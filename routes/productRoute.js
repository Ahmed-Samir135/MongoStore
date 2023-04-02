var router = require("express").Router();
var productController = require("./../controllers/productController");


router.route("/")
.get(productController.getallProducts)
.post(productController.createProduct);

router.route("/:id")
.get(productController.getProduct)
.put(productController.updateProduct)
.delete(productController.deleteProduct);
module.exports = router;