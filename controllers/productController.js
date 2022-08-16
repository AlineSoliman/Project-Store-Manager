const productsService = require('../services/productsServices');

const getAll = async (req, res) => {
  const result = await productsService.getAll();
  return res.status(200).json(result);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.getId(id);
  res.status(200).json(result);
};

module.exports = { getAll, getId };