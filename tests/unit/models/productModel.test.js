const { expect } = require ('chai') ;
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productsModel');

describe('GET ALL', () => {
  describe('Caso OK', () => {
    before(() => {
      const resultExecute = []
      Sinon.stub(connection, 'execute').resolves([resultExecute])
    })
    after(() => {
      connection.execute.restore()
    })
    it('retorna array', async function () {
      const resultado = await productModel.getAll();
      expect(resultado).to.be.an('array');
    });
    it('retorna array vazio', async function () {
      const resultado = await productModel.getAll();
      expect(resultado).to.be.empty;
    });
  });
});
