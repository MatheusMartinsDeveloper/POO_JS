export default class SalarioCalculator {
    static calcularAumento(salario, porcentagem) {
        return salario + (salario * (porcentagem / 100));
    }
}