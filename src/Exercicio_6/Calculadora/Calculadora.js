export default class Calculadora {
    somar(valor, valor2) {
        const calcular = valor + valor2;
        return console.log(`O resultado da soma dos números é de: ${calcular}`);
    }

    subtrair(valor, valor2) {
        const calcular = valor - valor2;
        return console.log(`O resultado da subtração dos números é de: ${calcular}`);
    }

    multiplicar(valor, valor2) {
        const calcular = valor * valor2;
        return console.log(`O resultado da multiplicação dos números é de: ${calcular}`);
    }

    dividir(valor, valor2) {
        const calcular = valor / valor2;
        return console.log(`O resultado da divisão dos números é de: ${calcular}`);
    }
}