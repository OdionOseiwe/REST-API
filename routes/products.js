const express = require('express');

const router = express.Router()

const {getProductStatic,getProduct} = require('../controllers/products');

router.route('/').get(getProduct);
router.route('/static').get(getProductStatic);

module.exports = router;