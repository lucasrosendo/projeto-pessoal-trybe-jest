// Complete os testes do arquivo `test/asyncJest.spec.js` para que funcionem com código assíncrono.

const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  // utiliza async/await com .resolves e .rejects
  test('atende', async () => {
    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    await expect(answerPhone(false)).rejects.toThrow(Error('Infelizmente não podemos atender...'));
  });
});
