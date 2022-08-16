const { expect } = require ('chai') ;
const { describe } = require('mocha');
const Sinon = require('sinon');
const productService = require('../../../services/productsServices');
const productController = require('../../../controllers/productController');

describe('GET ALL', () => {
  describe('Caso OK', () => {
    afterEach(() => {
      Sinon.restore();
    })
    it('retorna array', async function () {
      const request = {};
      const response = {};

      response.status = Sinon.stub().returns(response)
      response.json = Sinon.stub().returns()
      const resultExecute = [];
      Sinon.stub(productService, 'getAll').resolves(resultExecute);

      await productController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
});