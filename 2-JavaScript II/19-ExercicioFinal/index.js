/*Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas.
Ele deve atender aos seguintes requisitos:
Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema / Listar vagas disponíveis
Criar um nova vaga / Visualizar uma vaga / Inscrever um candidato em uma vaga / Excluir uma vaga / Sair

Listar vagas disponíveis
Criar um nova vaga
Visualizar uma vaga
Inscrever um candidato em uma vaga
Excluir uma vaga
Sair

A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.

A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário 
confirme as informações antes de salvá-las.

A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, 
quantidade de candidatos e o nome dos candidatos.

A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as 
informações da vaga antes de salvar o candidato na vaga.

A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes 
de realmente exclui-la. */

const vagas = [];

let option;
let i;
let confirma;

do {
  option = parseInt(
    prompt(
      "Selecione uma das seguintes opções:" +
        "\n1)Listar vagas disponíveis" +
        "\n2)Criar uma nova vaga" +
        "\n3)Visualizar uma vaga" +
        "\n4)Insecrever um candidato em uma vaga" +
        "\n5)Excluir uma vaga" +
        "\n6)Sair"
    )
  );

  switch (option) {
    case 1:
      if (vagas.length === 0) {
        alert("Não há nenhuma vaga disponível no momento!");
      } else {
        let listaVagas = "";

        vagas.forEach((vaga, i) => {
          listaVagas += `Indice: ${i}\nVaga: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData: ${vaga.data}\nQuantidade de Candidatos: ${vaga.candidatos.length}`;
        });
        alert(listaVagas);
      }

      break;

    case 2:
      const vaga = {};
      vaga.nome = prompt("Informe um nome para a vaga");
      vaga.descricao = prompt("Informe uma descrição para a vaga");
      vaga.data = prompt("Informe uma data limite para a vaga");
      vaga.candidatos = [];
      confirma = prompt(
        `Confima as seguintes informações? \nNome: ${vaga.nome} \nDescrição: ${vaga.descricao} \nData: ${vaga.data} \n(Sim/Não)`
      );

      if (confirma === "Sim") {
        vagas.push(vaga);
      } else {
        alert(`Criaçao de vaga cancelada`);
      }

      break;

    case 3:
      i = prompt("Digite o indice da vaga que deseja visualizar");

      if (i < 0 || i >= vagas.length) {
        alert("Indíce inválido");
      } else {
        alert(
          `Indice: ${i} \nNome: ${vagas[i].nome} \nDescrição: ${vagas[i].descricao} \nData: ${vagas[i].data} \nQuantidade de Candidatos: ${vagas[i].candidatos.length}`
        );
      }

      break;

    case 4:
      const nomeC = prompt("Digite o nome do candidato que deseja inscrever");
      i = prompt("Digite o indice da vaga a qual deseja inscrever o candidato");

      if (i < 0 || i >= vagas.length) {
        alert("Índíce inválido");
      } else {
        confirma = prompt(
          `Esta é a vaga a qual deseja inscrever?\n Indice: ${i} \nNome: ${vagas[i].nome} \nDescrição: ${vagas[i].descricao} \nData: ${vagas[i].data} \nQuantidade de Candidatos: ${vagas[i].candidatos.length}`
        );

        if (confirma === "Sim") {
          vagas[i].candidatos.push(nomeC);
          alert("Incrito com sucesso");
        } else {
          alert(`Inscrição de candidato cancelada`);
        }
      }

      break;

    case 5:
      i = prompt("Digite o indice da vaga a qual deseja excluir");

      if (i < 0 || i >= vagas.length) {
        alert("Indíce inválido");
      } else {
        confirma = prompt(
          `Esta é a vaga a qual deseja excluir? \nNome: ${vagas[i].nome} \nDescrição: ${vagas[i].descricao} \nData: ${vagas[i].data} \nQuantidade de Candidatos: ${vagas[i].candidatos.length}`
        );
        if (confirma === "Sim") {
          vagas.splice(i, 1);
        } else {
          alert(`Remoção Cancelada`);
        }
      }

      break;

    case 6:
      alert("Saindo");
      break;
    default:
      alert("Opção Inválida");
      break;
  }
} while (option !== 6);
