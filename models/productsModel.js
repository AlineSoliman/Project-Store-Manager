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

const getAllSales = async () => {
  const [result] = await connection.execute(`SELECT sale_id AS saleId, 
  sp.date, product_id AS productId, quantity  
  FROM StoreManager.sales_products AS s
  INNER JOIN StoreManager.sales AS sp ON sp.id = s.sale_id`);
  return result;
};

const getSalesId = async (id) => {
  const [result] = await connection
    .execute(`SELECT s.date,sp.product_id AS productId, sp.quantity FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp 
    ON sp.product_id = s.id
    WHERE sp.sale_id = ?;`, [id]);
  return result;
};

module.exports = {
  getAll,
  getId,
  saveModelProduct,
  salesTable,
  salesProducts,
  getAllSales,
  getSalesId,
};