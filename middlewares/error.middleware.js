const errorMiddleware = (err, _req, res, _next) => {
  const erro = {
    error: {
      code: err.code || 'underfinedError',
      message: err.message,
    },
  };
  res.status(err.status || 500).json(erro.error);
};

module.exports = errorMiddleware;
// tratamento de erro generalizado.