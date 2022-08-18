const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

const productsRoute = require('./routes/productsRoutes');
const salesRoute = require('./routes/salesRoutes');

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRoute);
app.use('/sales', salesRoute);

app.use(errorMiddleware);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;