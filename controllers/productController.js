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

const saveProduct = async (req, res) => {
  const { name } = req.body;
  const saved = await productsService.saveServiceProduct(name);
  return res.status(201).json(saved);
};

module.exports = { getAll, getId, saveProduct };