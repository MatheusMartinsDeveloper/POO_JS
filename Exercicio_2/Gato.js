import Animal from "./Animal.js";

export default class Gato extends Animal {
    constructor(nome, tipo, som) {
        super(nome, tipo);
        this.som = som;
    }

    emitirSom(nome, tipo, som) {
        this.nome = nome;
        this.tipo = tipo;
        this.som = som;
        
        console.log("O " + this.tipo + " com o nome " + this.nome + " emitiu um som!: " + this.som);
    }
}