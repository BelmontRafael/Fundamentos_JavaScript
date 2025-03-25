
const pessoa = {
    nome: "Rafael",
    idade: 21,
    dizerOla() {
        alert("Olá, meu nome é " + this.nome)
    }
}

const calculadora = {
    marca: "Samsung",
    somar(x, y){
        return alert(x + y)
    }
}

console.log(pessoa)
pessoa.dizerOla()
calculadora.somar(5, 2)
