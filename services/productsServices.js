const productsModel = require('../models/productsModel');

const getAll = async () => productsModel.getAll(); // regra de negócio

module.exports = { getAll };