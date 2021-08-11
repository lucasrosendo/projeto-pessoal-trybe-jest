// Intercale funções entre os testes definidos no arquivo test/setupTeardown.spec.js.

const adventure = require('../src/setupTeardown');

describe('quem sobreviveu?', () => {
  const specialistName = adventure.specialists; // pega o array de especialistas aventureiros
  const roundSpecs = () => specialistName.map((spec) => spec.nome); // faz um map no array de especialistas para pegar o nome;

  beforeEach(() => adventure.randomAttack()); // antes de cada teste, chama a função randomAttack() que está importada em adventure
  afterEach(() => console.log(`Sobrevivente(s) do round: ${(roundSpecs()).join(', ')}`)); // depois de cada teste imprime na tela o nome dos sobreviventes separados por vírgula;
  afterAll(() => console.log(specialistName[0].nome)); // Ao final dos testes imprime na tela o último sobrevivente da saga.

  test('depois da primeira aventura', () => {
    expect(specialistName.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(specialistName.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(specialistName.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(specialistName.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(specialistName.length).toBe(1);
  });
});
