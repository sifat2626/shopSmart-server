const express = require('express');
const router = express.Router();
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

// Route to create a new product
router.post('/products', createProduct);

// Route to get all products with pagination, searching, filtering, and sorting
router.get('/products', getProducts);

// Route to get a single product by its ID
router.get('/products/:id', getProductById);

// Route to update a product by its ID
router.put('/products/:id', updateProduct);

// Route to delete a product by its ID
router.delete('/products/:id', deleteProduct);

module.exports = router;
