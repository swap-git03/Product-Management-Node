
const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/getAllProducts', productController.getAllProducts);
router.get('/getProductById/:id', productController.getProductById);

module.exports = router;