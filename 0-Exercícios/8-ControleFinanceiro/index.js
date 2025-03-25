let money = parseFloat(prompt("Informe a quantidade de dinheiro disponivel"));
let option;

while (option !== 3) {
  option = parseInt(
    prompt(
      "Dinheiro disponivel: " +
        money +
        "\n1)Adicionar dinheiro" +
        "\n2)Remover dinheiro" +
        "\n3)Sair"
    )
  );

  switch (option) {
    case 1:
      let add = parseFloat(prompt("Informe a quantidade a ser adicionada"));
      money += add;
      break;
    case 2:
      let sub = parseFloat(prompt("Informe a quantidade a ser removida"));
      money -= sub;
      break;
    case 3:
      alert("Encerrando programa");
      break;
    default:
      alert("Opção inválida");
      break;
  }
}
