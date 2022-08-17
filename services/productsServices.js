const CustomError = require('../errors/customError');
const productsModel = require('../models/productsModel');

const getAll = async () => productsModel.getAll(); // regra de negócio

const saveServiceProduct = async (product) => {
  const savedProducts = await productsModel.saveModelProduct(product);
  return savedProducts;
};
const getId = async (id) => {
  const product = await productsModel.getId(id);
  if (!product) throw new CustomError(404, 'not found', 'Product not found');
  return product;
};
module.exports = { getAll, getId, saveServiceProduct };