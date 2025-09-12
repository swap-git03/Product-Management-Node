const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

// READ
router.get("/getAllProducts", productController.getAllProducts);
router.get("/getProductById/:id", productController.getProductById);

// CREATE
router.post("/createProduct", productController.createProduct);

// UPDATE
router.put("/updateProduct/:id", productController.updateProduct);

// DELETE
router.delete("/deleteProduct/:id", productController.deleteProduct);

module.exports = router;
