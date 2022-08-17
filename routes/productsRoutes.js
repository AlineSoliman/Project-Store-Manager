const express = require('express');

const productsController = require('../controllers/productController');

const productsRoute = express.Router();

const productValidate = require('../middlewares/validateProduct');

productsRoute.get('/', productsController.getAll);
productsRoute.get('/:id', productsController.getId);
productsRoute.post('/', productValidate.productMiddleware, productsController.saveProduct);

module.exports = productsRoute;