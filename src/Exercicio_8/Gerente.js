import Funcionario from "./Funcionario.js";
import SalarioCalculator from "./SalarioCalculator.js";

export default class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }

    aumentarSalario(porcentagem) {
        const novoSalario = SalarioCalculator.calcularAumento(this.salario, porcentagem);
        console.log(`O Gerente: ${this.nome} com o salário de R$ ${this.salario} do departamento ${this.departamento} recebeu um aumento de ${porcentagem}%. Agora o seu salário é de R$ ${novoSalario}.`);
        this.salario = novoSalario;
    }
}