import Instrumento from "./Instrumento.js";

export default class Piano extends Instrumento {
    tocar() {
        console.log("O Piano está sendo tocado, e reproduzindo som utilizando suas teclas!");
    }
}