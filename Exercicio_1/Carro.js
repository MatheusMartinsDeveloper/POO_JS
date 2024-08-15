export default class Carro {
    marca;
    modelo;
    ano;

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes() {
        console.log("Marca: " + this.marca, "Modelo: " + this.modelo, "Ano: " + this.ano);
    }
}