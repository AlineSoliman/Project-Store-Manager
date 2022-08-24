const productsService = require('../services/productsServices');

const getAll = async (req, res) => {
  const result = await productsService.getAll();
  return res.status(200).json(result);
};

const getId = async (req, res, _next) => {
  const { id } = req.params;
  // try {
  // const product = await productsService.getId(id);
  // res.status(200).json(product);
  // } catch (error) {
  //   res.status(404).json({ message: 'Product not found' });
  // }

  // const product = await productsService.getId(id);
  // const error = { code: 'notFound', message: 'Product not found', status: 404 };
  // if (!product) next(error);
  // return res.status(200).json(product);
  const product = await productsService.getId(id);
  return res.status(200).json(product);
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

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  await productsService.deleteProductById(id);
  return res.status(204).json({ message: 'Produto deletado' });
};

module.exports = {
  getAll,
  getId,
  saveProduct,
  salesProducts,
  getAllSales,
  getSalesId,
  deleteProductById,
};