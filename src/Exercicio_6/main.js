import Carro from "./Carro/Carro.js";
import Calculadora from "./Calculadora/Calculadora.js";

function main() {
    const instanciaCarro = new Carro();
    const instanciaCalculadora = new Calculadora();

    instanciaCarro.mover();
    instanciaCalculadora.somar(5, 5);
    instanciaCalculadora.subtrair(10, 5);
    instanciaCalculadora.multiplicar(5, 5);
    instanciaCalculadora.dividir(15, 5);
}

main();