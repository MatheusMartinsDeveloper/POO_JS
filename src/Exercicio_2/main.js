import Animal from "./Animal.js";
import Gato from "./Gato.js";
import Gerente from "./Gerente.js";

function main() {
    const instanciaAnimal = new Animal("Donque", "Cavalo");
    const instanciaGato = new Gato();
    const instanciaGerente = new Gerente();

    instanciaAnimal.emitirSom();
    instanciaGato.emitirSom("Miausculo", "Gato", "Miau");
    instanciaGato.emitirSom("Miauzinho", "Gato Selvagem", "Miau Miau");

    instanciaGerente.aumentarSalario("Carlos", 3000, "Administração", 40);
}

main();