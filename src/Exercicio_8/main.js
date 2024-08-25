import Gerente from "./Gerente.js";

function main() {
    const instanciaGerente = new Gerente("Maria", 5000, "Vendas");

    instanciaGerente.aumentarSalario(10);
}

main();