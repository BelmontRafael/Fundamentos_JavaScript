let option;
const imoveis = [];

do {
  option = parseInt(
    prompt(
      "Quantidade de Imóveis: " +
        imoveis.length +
        "\n1)Salvar imóvel" +
        "\n2)Mostrar imóveis disponíveis" +
        "\n3)Sair"
    )
  );

  switch (option) {
    case 1:
      const imovel = {};

      imovel.propName = prompt("Informe o nome do imóvel");
      imovel.nRooms = prompt("Informe a quantidade de quartos do imóvel");
      imovel.nBathrooms = prompt("Informe a quantidade de banheiros");
      imovel.hasGarage = prompt(
        "Informe se o imovel possui garagem: (Sim/Não)"
      );
      imoveis.push(imovel);
      break;
    case 2:
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Nome:" +
            imoveis[i].propName +
            "\nNúmero de quartos: " +
            imoveis[i].nRooms +
            "\nNúmero de banheiros: " +
            imoveis[i].nBathrooms +
            "\nGaragem: " +
            imoveis[i].hasGarage
        );
      }
      break;
    case 3:
      alert("Saindo");
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (option !== 3);
