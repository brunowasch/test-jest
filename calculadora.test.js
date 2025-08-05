const { somar, subtrair, multiplicar, dividir, porcentagem } = require('./calculadora');

test('deve somar dois números corretamente', () => {
  expect(somar(5, 3)).toBe(8);
  expect(somar(-1, -3)).toBe(-4); //Podemos utilizar mais de um expect
});

test('deve somar dois números negativos corretamente', () => {
  expect(somar(-1, -3)).toBe(-4);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('deve subtrair dois números negativos corretamente', () => {
  expect(subtrair(-1,-3)).toBe(2);
})

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve multiplicar dois números negativos corretamente', () => {
  expect(multiplicar(-5,-2)).toBe(10);
})

test('deve dividir dois números corretamente', () => {
  expect(dividir(9, 3)).toBe(3);
});

/* test('deve lançar erro ao dividir por zero', () => {
  expect(() => dividir(10, 0)).toThrow('Divisor não pode ser zero');
}); */

test('deve dividir dois números negativos corretamente', () => {
  expect(dividir(-10, -5)).toBe(2);
})

test('deve retornar null ao dividir por zero', () => {
  expect(dividir(100, 0)).toBe(null);
})

test('deve calcular a porcentagem entre números corretamente', () => {
  expect(porcentagem(10, 100)).toBe(10);
});

test('deve calcular a porcentagem de números negativos corretamente', () => {
  expect(porcentagem(-20, -100)).toBe(20);
})