const word = prompt("Informe uma palavra, para verificar se é palindromo")
let iWord = "";

for(let i = word.length - 1 ; i > -1 ; i--) {
    iWord += word[i]
    alert(iWord)
}

if (word == iWord) {
    alert("É palindromo!")
} else {
    alert("Não é palindromo")
}