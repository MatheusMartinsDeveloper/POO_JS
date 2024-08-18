export default class ContaBancaria {
    constructor(titular, saldoInicial) {
        this._titular = titular;
        this._saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }

    get titular() {
        return this._titular;
    }

    set titular(novoTitular) {
        if (novoTitular.length > 0) {
            this._titular = novoTitular;
        } else {
            console.error("Nome do Titular inválido!");
        }
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(novoSaldo) {
        if (novoSaldo >= 0) {
            return this._saldo = novoSaldo;
        } else {
            console.error("O saldo não pode ser negativo!");
        }
    }

    depositar(valor) {
        if (valor >= 0) {
            this.saldo += valor;
            console.log(`${this.titular} você fez um depóstio de R$ ${valor}, seu novo saldo é de: R$ ${this.saldo}`);
        } else {
            console.error("Não é possivel depositar esse valor!");
        }
    }

    sacar(valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`${this.titular} você fez um saque de R$ ${this.valor}, seu novo saldo é de: R$ ${this.saldo}`);
        } else {
            console.error("Não é possivel sacar esse valor!");
        }
    }
}