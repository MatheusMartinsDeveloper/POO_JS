import Veiculo from "./Veiculo.js";

export default class Bicicleta extends Veiculo {
    mover() {
        console.log("A Bicicleta está se movendo a 35 km, com 2 rodas!");
    }
}