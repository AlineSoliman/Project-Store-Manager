const productSchema = require('./schemaProduct');

const isProductValid = (product) => {
  const isValid = productSchema.validate(product);
  return isValid;
};

const productMiddleware = (req, res, next) => {
  const product = { ...req.body };
  const { error } = isProductValid(product);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  next();
};

module.exports = { productMiddleware };