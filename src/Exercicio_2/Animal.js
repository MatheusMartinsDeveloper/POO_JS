export default class Animal {
    nome;
    tipo;

    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    emitirSom() {
        console.log("O animal " + this.nome + " do tipo " + this.tipo + " emitiu um som!");
    }
}