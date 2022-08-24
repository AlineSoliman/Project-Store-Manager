const CustomError = require('../errors/customError');
const productsModel = require('../models/productsModel');

const getAll = async () => productsModel.getAll(); // regra de negócio

const saveServiceProduct = async (product) => {
  const savedProducts = await productsModel.saveModelProduct(product);
  return savedProducts;
};
const getId = async (id) => {
  const product = await productsModel.getId(id);
  // if (!product) throw new CustomError(404, 'not found', 'Product not found'); 1
  // if (!product) throw new Error();2 try catch

  if (!product) throw new CustomError(404, 'not found', 'Product not found');
  return product;
};

const salesProducts = async (sold) => {
  const validateId = sold.map(({ productId }) => productsModel.getId(+productId));
  const validProductId = await Promise.all(validateId);
  const soldProduct = validProductId.some((productId) => !productId);
  if (soldProduct) throw new CustomError(404, 'not found', 'Product not found');

  const sales = await productsModel.salesTable();

  const { insertId } = sales;

  const infoProductsSales = sold.map((product) => productsModel.salesProducts(
    +insertId, +product.productId, +product.quantity,
  ));
  await Promise.all(infoProductsSales);
  return {
    id: insertId,
    itemsSold: sold,
  };
};

const getAllSales = async () => {
  const allSales = await productsModel.getAllSales();
  return allSales;
};

const getSalesId = async (saleId) => {
  const product = await productsModel.getSalesId(saleId);
  if (!product || product.length === 0) throw new CustomError(404, 'not found', 'Sale not found');
  console.log(product);
  return product;
};

const deleteProductById = async (id) => {
  const product = await productsModel.getId(id);
  if (!product) throw new CustomError(404, 'not found', 'Product not found');
  await productsModel.deleteProductById(id);
};

module.exports = {
  getAll,
  getId,
  saveServiceProduct,
  salesProducts,
  getAllSales,
  getSalesId,
  deleteProductById,
  };