import Instrumento from "./Instrumento.js";

export default class Violao extends Instrumento {
    tocar() {
        console.log("O Violão está sendo tocado, e reproduzindo som utilizando suas cordas!");
    }
}