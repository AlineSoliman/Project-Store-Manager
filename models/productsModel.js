const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getId = async (id) => {
  const [[result]] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?;', [id]);
  return result;
};

const saveModelProduct = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [products] = await connection.execute(query, [name]);
  return { id: products.insertId, name };
};

const salesTable = async () => {
   const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
   const [sales] = await connection.execute(query);
  return sales;
};

const salesProducts = async (saleId, productId, quantity) => {
  const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
   VALUES (?, ?, ?)`;
   const [soldProducts] = await connection.execute(query, [saleId, productId, quantity]);
  return soldProducts;
};

module.exports = { getAll, getId, saveModelProduct, salesTable, salesProducts };