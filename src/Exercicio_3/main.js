import PromptSync from "prompt-sync";
import ContaBancaria from "./ContaBancaria.js";
import Produto from "./Produto.js";

function main() {
    let loop = true;
    const prompt = PromptSync();
    const instanciaContaBancaria = new ContaBancaria();
    const instanciaProduto = new Produto();

    while (loop) {
        console.log("Digite 1 para entrar no menu Conta Bancária!");
        console.log("Digite 2 para entrar no menu Produto!")
        console.log("Digite 3 para encerrar!");
        const menu = parseInt(prompt());

        switch (menu) {
            case 1: {
                console.log("Você entrou no menu Conta Bancária!");
                console.log("Digite 1 para Depositar!");
                console.log("Digite 2 para Sacar!");
                console.log("Digite 3 para Voltar!")
                const menuConta = parseInt(prompt());

                if (menuConta == 1) {
                    console.log("Você entrou no menu Depositar!");
                    console.log("Informe o seu nome de Titular!");
                    const nomeTitular = prompt();

                    instanciaContaBancaria.titular = nomeTitular;

                    console.log(`${nomeTitular}, informe o valor em que deseja depositar na sua conta!:`);
                    const valorDeposito = parseInt(prompt());

                    instanciaContaBancaria.depositar(valorDeposito);
                } else if (menuConta == 2) {
                    console.log("Você entrou no menu Sacar!");
                    console.log("Informe o nome do Titular!:");
                    const nomeTitular = prompt();

                    instanciaContaBancaria.titular = nomeTitular;
                    
                    console.log(`${nomeTitular}, informe o valor em que deseja sacar de sua conta!:`);
                    const valorSaque = parseInt(prompt());

                    instanciaContaBancaria.sacar(valorSaque);
                } else if (menuConta == 3) {
                    continue;
                }
            } break;
            case 2: {
                console.log("Você entrou no menu Produto!");
                console.log("Digite 1 para Adicionar um Produto!");
                console.log("Digite 2 para Aplicar Desconto!");
                console.log("Digite 3 para Voltar!");
                const menuProduto = parseInt(prompt());

                if (menuProduto == 1) {
                    console.log("Você entrou no menu Adicionar Produto!");
                    console.log("Digite o Nome do Produto:");
                    const nomeProduto = prompt();

                    instanciaProduto.nome = nomeProduto;

                    console.log("Digite o Preço do Produto:");
                    const precoProduto = parseFloat(prompt());

                    instanciaProduto.preco = precoProduto;

                    const addProduto = {
                        nome: nomeProduto,
                        preco: precoProduto
                    };

                    instanciaProduto.adicionarProduto(addProduto);
                } else if (menuProduto == 2) {
                    console.log("Você entrou no menu Aplicar Desconto!");
                    console.log("Digite o nome do produto, em que deseja aplicar o desconto:");
                    const nomeProdutoDesconto = prompt();

                    console.log("Digite o valor de desconto:");
                    const descontoProduto = parseFloat(prompt());

                    instanciaProduto.aplicarDesconto(nomeProdutoDesconto, descontoProduto);
                } else if (menuProduto == 3) {
                    continue;
                }
            } break;
            case 3: {
                console.log("Você encerrou!");
                loop = false;
            } break;
            default: {
                console.error("Essa opção não é válida!");
            }
        }
    }
}

main();