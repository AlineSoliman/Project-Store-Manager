class CustomError extends Error { // objeto padrão do js para manipular os erros
  constructor(status, code, message) { // propriedades herdadas para customizar (parâmetros que serão alterados)
    super(message);
    this.status = status;
    this.code = code;
  }
}
module.exports = CustomError;