import Imposto from "./Imposto.js";

export default class ImpostoRenda extends Imposto {
    calcularImposto(valor) {
        let aliquota;

        if (valor <= 24511.92) {
            aliquota = 0;
        } else if (valor >= 24511.93 && valor <= 33919.80) {
            aliquota = 0.075;
        } else if (valor >= 33919.81 && valor <= 45012.60) {
            aliquota = 0.15;
        } else if (valor >= 45012.61 && valor <= 55976.16) {
            aliquota = 0.225;
        } else if (valor >= 55976.16) {
            aliquota = 0.275;
        }

        const calcular = parseFloat(valor * aliquota).toFixed(2);

        return console.log(`O seu Imposto de Renda é de: ${calcular}`);
    }
}