const carName1 = prompt("Digite o nome do primeiro veículo");
const veloc1 = prompt("Digite a velocidade do primeiro veículo");
const carName2 = prompt("Digite o nome do segundo veículo");
const veloc2 = prompt("Digite a velocidade do segundo veículo");

if (veloc1 === veloc2) {
  alert(
    carName1 +
    " tem a mesma velocidade que " +
    carName2 +
    "\n" +
    veloc1 +
    "km " +
    " = " +
    veloc2 +
    "km"
  );
} else if (veloc1 >= veloc2) {
  alert(
    carName1 +
    " é mais veloz que " +
    carName2 +
    "\n" +
    veloc1 +
    "km " +
    " > " +
    veloc2 +
    "km"
  );
} else {
  alert(
    carName1 +
    " é mais lento que " +
    carName2 +
    "\n" +
    veloc1 +
    "km " +
    " < " +
    veloc2 +
    "km"
  );
}
