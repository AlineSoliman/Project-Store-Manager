const { expect } = require ('chai') ;
const { describe } = require('mocha');
const Sinon = require('sinon');
const productModel = require('../../../models/productsModel');
const productService = require('../../../services/productsServices');

describe('GET ALL', () => {
  describe('Caso OK', () => {
    afterEach(() => {
      Sinon.restore();
    })
    it('retorna array', async function () {
      const resultExecute = [];
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);

      const resultado = await productService.getAll();
      expect(resultado).to.be.an('array');
    });
    it('retorna array vazio', async function () {
      const resultExecute = [];
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);

      const resultado = await productService.getAll();
      expect(resultado).to.be.empty;
    });
    it('retorna array que contenha objetos', async function () {
      const resultExecute = [{ id: 1, name: 'teste'}];
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      
      const [resultado] = await productService.getAll();
      expect(resultado).to.be.an('object');
      expect(resultado).to.all.keys('name', 'id');
    });
  });
});
