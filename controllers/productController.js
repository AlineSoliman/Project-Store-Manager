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

const salesProducts = async (req, res) => {
  const sold = req.body;
  const savedSale = await productsService.salesProducts(sold);
  // console.log(sold);
  return res.status(201).json(savedSale);
};

const getAllSales = async (_req, res) => {
  const result = await productsService.getAllSales();
  return res.status(200).json(result);
};

const getSalesId = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.getSalesId(id);
  res.status(200).json(result);
};

module.exports = { getAll, getId, saveProduct, salesProducts, getAllSales, getSalesId };