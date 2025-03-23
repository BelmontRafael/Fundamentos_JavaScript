let queue = [];
let option;

do {
  let patients = "";

  for (i = 0; i < queue.length; i++) {
    patients += (i + 1) + "º - " + queue[i] + "\n";
  }

  option = parseInt(
    prompt(
      "Fila de pacientes: " +
        patients +
        "\n" +
        "\n1)Novo paciente" +
        "\n2)Consultar paciente" +
        "\n3)Sair"
    )
  );

  switch (option) {
    case 1:
      const patientName = prompt("Informe o nome do novo paciente");
      queue.push(patientName);
      alert("Paciente " + patientName + " entrou na fila");
      break;
    case 2:
      const removedPatient = queue.shift();
      if (queue.length > 0) {
        alert("Consultando paciente " + removedPatient);
      } else {
        alert("Fila vazia");
      }
      break;
    case 3:
      alert("Saindo...");
      break;
    default:
      alert("Opção Inválida");
      break;
  }
} while (option !== 3);
