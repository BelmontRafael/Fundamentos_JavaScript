let number = parseFloat(
  prompt(
    "Informe um numero para que possamos calcular a sua tabuada de 1 ate 20"
  )
);
let result = "\n";

for (let i = 1; i < 21; i++) {
  result += number + " x " + i + " = " + number * i + " \n"
}

alert("Resultado: " + result);
