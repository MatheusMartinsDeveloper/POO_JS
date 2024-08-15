import Animal from "./Animal.js";
import Gato from "./Gato.js";

function main() {
    const instanciaAnimal = new Animal("Donque", "Cavalo");
    const instanciaGato = new Gato();

    instanciaAnimal.emitirSom();
    instanciaGato.emitirSom("Miausculo", "Gato", "Miau");
    instanciaGato.emitirSom("Miauzinho", "Gato Selvagem", "Miau Miau");
}

main();