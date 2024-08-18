export default class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar() {
        console.log(this.nome + " com " + this.idade + " anos, cumprimentou você!");
    }
}