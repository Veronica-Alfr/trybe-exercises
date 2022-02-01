const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

test('Testando uppercase, retorna string com letras maiusculas', (done) => {
uppercase('ola', (result) => {
    try {
    expect(result).toBe('OLA');
    done();
    } catch (error) {
    done(error);
    }
});
});

//   Escreva um teste que verifique a chamada da callback de uma função uppercase , 
//que transforma as letras de uma palavra em letras maiúsculas. 
//   Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.