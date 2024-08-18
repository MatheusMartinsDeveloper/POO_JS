import Funcionario from "./Funcionario.js";

export default class Gerente extends Funcionario {

    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }

    aumentarSalario(nome, salario, departamento, porcentagem) {
        this.nome = nome;
        this.salario = salario;
        this.departamento = departamento;
        this.porcentagem = porcentagem;

        console.log("O Gerente: " + nome + " com o salario de R$ " + salario + " do departamento " + departamento + " recebeu um aumento de R$ " + porcentagem + " agora o seu sálario é de " + (salario + porcentagem));
    }
}