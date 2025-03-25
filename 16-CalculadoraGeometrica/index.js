function triangle() {
  const base = parseFloat(prompt("Informe a base do triângulo:"));
  const altura = parseFloat(prompt("Informe a altura do triângulo:"));
  return (base * altura) / 2;
}

function rect() {
  const base = parseFloat(prompt("Informe a base do retângulo:"));
  const altura = parseFloat(prompt("Informe a altura do retângulo:"));
  return base * altura;
}

function square() {
  const lado = parseFloat(prompt("Informe a área do quadrado:"));
  return lado * lado;
}

function trap() {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
  const altura = parseFloat(prompt("Informe a altura do trapézio:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function circle() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"));
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = triangle();
        break;
      case "2":
        resultado = rect();
        break;
      case "3":
        resultado = square();
        break;
      case "4":
        resultado = trap();
        break;
      case "5":
        resultado = circle();
        break;
      case "S6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida!");
        break;
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
