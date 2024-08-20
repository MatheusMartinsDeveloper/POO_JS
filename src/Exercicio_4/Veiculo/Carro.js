import Veiculo from "./Veiculo.js";

export default class Carro extends Veiculo {
    mover() {
        console.log("O Carro está se movendo a 60 Km, com 4 rodas!");
    }
}