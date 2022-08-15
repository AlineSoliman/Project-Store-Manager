const productsService = require('../services/productsServices');

const getAll = async (req, res) => {
  const result = await productsService.getAll();
  res.status(200).json(result);
};

module.exports = { getAll };