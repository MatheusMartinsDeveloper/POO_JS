import Carro from "./Veiculo/Carro.js";
import Bicicleta from "./Veiculo/Bicicleta.js";
import Violao from "./Instrumento/Violao.js";
import Piano from "./Instrumento/Piano.js";

function main() {
    const instanciaCarro = new Carro();
    const instanciaBicicleta = new Bicicleta();
    const instanciaViolao = new Violao();
    const instanciaPiano = new Piano();

    instanciaCarro.mover();
    instanciaBicicleta.mover();
    instanciaViolao.tocar();
    instanciaPiano.tocar();
}  

main();