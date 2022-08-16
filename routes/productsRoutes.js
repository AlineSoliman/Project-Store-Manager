const express = require('express');

const productsController = require('../controllers/productController');

const productsRoute = express.Router();

productsRoute.get('/', productsController.getAll);
productsRoute.get('/:id', productsController.getId);

module.exports = productsRoute;