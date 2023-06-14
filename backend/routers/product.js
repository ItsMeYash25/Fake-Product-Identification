const express = require("express");
const router = express.Router()

// Controller Function
const {createProduct, fetchProduct, fetchAllProduct, authenticateProduct, markAsFake ,markAsReal} = require("../controller/productController");

router.post("/",fetchAllProduct)
router.post("/create_product",createProduct)
router.post("/show_product",fetchProduct)
router.post("/authorize",authenticateProduct)
router.post("/mark_fake",markAsFake)
router.post("/mark_real",markAsReal)

module.exports = router