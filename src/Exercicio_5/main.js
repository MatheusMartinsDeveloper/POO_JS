import Quadrado from "./FormaGeometrica/Quadrado.js";
import Circulo from "./FormaGeometrica/Circulo.js";
import ImpostoRenda from "./Imposto/ImpostoRenda.js";
import ImpostoServico from "./Imposto/ImpostoServico.js";

function main() {
    const instanciaQuadrado = new Quadrado();
    const instanciaCirculo = new Circulo();
    const instanciaImpostoRenda = new ImpostoRenda();
    const instanciaImpostoServico = new ImpostoServico();

    instanciaQuadrado.calcularArea(5);
    instanciaCirculo.calcularArea(5);

    instanciaImpostoRenda.calcularImposto(32465);
    instanciaImpostoServico.calcularImposto(5000, 0.25);
}

main();