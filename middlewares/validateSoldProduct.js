const salesSchema = require('./schemaSales');

const isSaleValid = (sales) => {
  const isValid = salesSchema.validate(sales);
  return isValid;
};

const salesMiddleware = (req, res, next) => {
  const sales = req.body;
  const { error } = isSaleValid(sales);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  next();
};

module.exports = { salesMiddleware };