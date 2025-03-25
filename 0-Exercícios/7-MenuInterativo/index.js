let option

do {
  option = parseInt(
    prompt(
      "Escolha uma das opções: " +
        "\n1)" +
        "\n2)" +
        "\n3)" +
        "\n4)" +
        "\n5)Encerrar menu"
    )
  );

  switch (option) {
    case 1:
      alert("Escolheu 1");
      break;
    case 2:
      alert("Escolheu 2");
      break;
    case 3:
      alert("Escolheu 3");
      break;
    case 4:
      alert("Escolheu 4");
      break;
    case 5:
      alert("Encerrando menu!");
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (option != 5);
