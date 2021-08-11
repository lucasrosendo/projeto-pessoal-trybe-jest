// Crie uma API mock no arquivo test/mockApi.spec.js para que os testes do Jest utilizem retornos de API fixos e independentes de requisições.

const api = require('../src/mockApi');

describe('verifica o usuário', () => {
  // Este é o json fake que deverá ser retornado assim que a requisição fake da API for resolvida

  const informacoesUser = {
    gender: 'male',
    name: {
      first: 'Antônio',
      last: 'Britto',
    },
    location: {
      country: 'Brazil',
    },
    email: 'tunico@bol.com.br',
    login: {
      username: 'tunicao123',
      password: '1234567890',
    },
  };

  test('verifica se o usuário é o tunico', async () => {
    // mocka a função original com spyOn e o resolvedValue fica sendo o objeto jason fake

    jest.spyOn(api, 'fetchURL').mockResolvedValue(informacoesUser);

    const tunicaoUser = await api.fetchURL();

    expect(tunicaoUser.gender).toEqual('male');
    expect(tunicaoUser.name.first).toEqual('Antônio');
    expect(tunicaoUser.name.last).toEqual('Britto');
    expect(tunicaoUser.location.country).toEqual('Brazil');
    expect(tunicaoUser.email).toEqual('tunico@bol.com.br');
    expect(tunicaoUser.login.username).toEqual('tunicao123');
    expect(tunicaoUser.login.password).toEqual('1234567890');
  });
});
