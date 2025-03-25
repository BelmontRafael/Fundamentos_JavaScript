const nameT = prompt("Informe o seu nome")
let question = prompt("Já visitou alguma cidade?  (Sim/Não)" )
let cities = ""
let count = 0

while (question === "Sim") {

    let city = prompt("Qual o nome da cidade?")
    cities += "\n- " + city
    count++
    question = prompt("Ja visitou outra cidade?  (Sim/Não)")
}

alert("Nome: " + nameT + "\nCidades visitadas: " + count + "\nNomes das cidades: " + cities)