const express = require('express');

const productsController = require('../controllers/productController');

const salesRoute = express.Router();

const salesValidate = require('../middlewares/validateSoldProduct');

salesRoute.post('/', salesValidate.salesMiddleware, productsController.salesProducts);

module.exports = salesRoute;