import FormaGeometrica from "./FormaGeometrica.js";

export default class Circulo extends FormaGeometrica {
    calcularArea(raio) {
        const pi = 3.14;
        const area = pi * (raio * raio);

        return console.log(`A área do círculo é de: ${area}`);
    }
}