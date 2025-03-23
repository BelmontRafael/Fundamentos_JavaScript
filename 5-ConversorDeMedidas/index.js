const value = parseFloat(prompt("Informe um valor em metros"));
const option = parseInt(
  prompt(
    "Escolha a unidade de medida a que deseja converter\n1-mm\n2-cm\n3-dm\n4-dam\n5-hm\n6-km"
  )
);
let result = 0;

switch (option) {
  case 1:
    result += value * 1000;
    alert("Resultado: " + result);
    break;
  case 2:
    result += value * 100;
    alert("Resultado: " + result);
    break;
  case 3:
    result += value * 10;
    alert("Resultado: " + result);
  case 4:
    result += value / 10;
    alert("Resultado: " + result);
    break;
  case 5:
    result += value / 100;
    alert("Resultado: " + result);
    break;
  case 6:
    result += value / 1000;
    alert("Resultado: " + result);
    break;
  default:
    alert("Opção Inválida");
    break;
}
