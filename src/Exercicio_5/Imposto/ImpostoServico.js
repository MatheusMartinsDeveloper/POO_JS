import Imposto from "./Imposto.js";

export default class ImpostoServico extends Imposto {
    calcularImposto(valor, aliquota) {
        if (valor <= 0) {
            throw new Error("Esse valor não é aceitado!");
        }

        if (aliquota <= 0) {
            throw new Error("Esse valor de aliquota não é aceitado!");
        }

        const calcular = parseFloat(valor * aliquota).toFixed(2);

        return console.log(`O seu Imposto de Serviço é de: ${calcular}`);
    }
}