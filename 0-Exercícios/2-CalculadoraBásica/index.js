const number1 = prompt("Insira o primeiro numero!");
const number2 = prompt("Insira o segundo numero!");

const x = parseFloat(number1);
const y = parseFloat(number2);

const sum = x + y;
const sub = x - y;
const mult = x * y;
const div = x / y;

alert(
  "Soma: " +
  sum +
  "\nSubtração: " +
  sub +
  "\nMultiplicação: " +
  mult +
  "\nDivisão: " +
  div
);
