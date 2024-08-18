import Carro from "./Carro.js";
import Pessoa from "./Pessoa.js";

function main() {
    const instanciaCarro = new Carro("Volkswagen", "Jetta", 2013);
    instanciaCarro.detalhes();

    const instanciaPessoa = new Pessoa("João", 19);
    instanciaPessoa.cumprimentar();
}

main();