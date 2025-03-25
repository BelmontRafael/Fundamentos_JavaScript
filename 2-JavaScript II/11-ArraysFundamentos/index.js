let arr = ["Rafael", "Miguel", "João"];

//ADIÇÃO E REMOÇÃO -------------------------------------------------------------------------

//Adiociona um elemento no final do array e retorna o novo tamanho do array
arr.push("João Paulo");
console.log(arr);

//Remove um elemento no final do array e retorna o elemento removido
arr.pop();
console.log(arr);

//Adiciona um elemento no inicio do array e retorna o novo tamanho do array
arr.unshift("Pedro");
console.log(arr);

//Remove um elemento no inicio do array e retorna o elemento removido
arr.shift()
console.log(arr)

//PESQUISA ---------------------------------------------------------------------------------

//Verifica se um certo elemento está presente no array
console.log(arr.includes("Rafael"))
console.log(arr.includes("Maria"))

//Encontra o indice do elemento indicado ou -1 caso ele não exista
console.log(arr.indexOf("João"))
console.log(arr.indexOf("Pedro"))

//CORTANDO E CONCATENANDO -------------------------------------------------------------------

//Copia uma parte do array e retorna a parte copiada, sem alterar o array original
console.log(arr.slice(0, 2))
//Numeros negativos referenciam o final do array
console.log(arr.slice(-1))

//Junta dois ou mais arrays e/ou itens e retorna o resultado (sem alterar nenhum dos arrays)
console.log(arr.concat("Joel"))
console.log(arr)

//SUBSTITUINDO ELEMENTOS ---------------------------------------------------------------------

//Permite remover elementos em qualquer posição do array e subistituir por novos, após isso retorna os elementos removidos
console.log(arr.splice(0, 3, "Joel", "Maria", "Pedro"))
console.log(arr)

//ITERANDO SOBRE OS ELEMENTOS ----------------------------------------------------------------

for(let i = 0 ; i < arr.length ; i++) {
    console.log(arr[i])
}