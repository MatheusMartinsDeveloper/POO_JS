import FormaGeometrica from "./FormaGeometrica.js";

export default class Quadrado extends FormaGeometrica {
    calcularArea(lado) {
        const area = lado * lado;

        return console.log(`A área do quadrado é de: ${area}`);
    }
}