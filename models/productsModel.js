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
module.exports = { getAll, getId, saveModelProduct };