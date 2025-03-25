const nameR = prompt("Informe o primeiro nome do recruta: ");
const surname = prompt("Informe o sobrenome do recruta");
const study = prompt("Informe o campo de estudo");
const year = prompt("Informe o ano de nascimento");

alert(
  "Contratado com Sucesso!\n" +
  nameR +
  " " +
  surname +
  "\nCampo de Estudo: " +
  study +
  " \n" +
  (2025 - year)
);
