let stack = [];
let option;

do {

  option = parseInt(
    prompt(
      "Quantidade de Cartas no Baralho: " +
        stack.length +
        "\n1)Adicionar uma carta" +
        "\n2)Puxar uma carta" +
        "\n3)Sair"
    )
  );

  switch (option) {
    case 1:
      const addedCard = prompt("Informe o nome da carta que sera adicionada");
      stack.push(addedCard);
      break;
    case 2:
      const removedCard = stack.pop();
      if (removedCard) {
        alert("Carta puxada: " + removedCard);
      } else {
        alert("Não há cartas no baralho");
      }

      break;
    case 3:
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
  }
} while (option !== 3);
