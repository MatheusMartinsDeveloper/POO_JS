export default class Produto {
    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;
        this._listaProdutos = [];
    }

    get nome() {
        return this._nome;
    }

    set nome(novoProduto) {
        if (novoProduto.length >= 0) {
            return this._nome = novoProduto;
        } else {
            console.error("O nome do produto é inválido!");
        }
    }

    get preco() {
        return this._preco;
    }

    set preco(precoProduto) {
        if (precoProduto >= 0) {
            return this._preco = precoProduto;
        } else {
            console.error("O preço do produto é inválido!");
        }
    }

    adicionarProduto(novoProduto) {
        if (novoProduto && novoProduto.nome && novoProduto.preco) {
            this._listaProdutos.push(novoProduto);
            console.log("Produto adicionado com sucesso!");
            console.log("Essa é a lista de todos os produto!");
            this._listaProdutos.forEach(produto => {
                console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}`);
            });
        } else {
            console.error("Não foi possivel adicionar esse produto!");
        }
    }

    aplicarDesconto(nomeProduto, desconto) {
        if (nomeProduto && desconto >= 0) {
            this._listaProdutos.forEach(produto => {
                if (produto.nome == nomeProduto) {
                    produto.preco -= desconto;
                    
                    console.log(`Você aplicou no desconto no produto ${produto.nome} com o desconto de R$ ${desconto.toFixed(2)}, o novo preço do produto é R$ ${produto.preco.toFixed(2)}`);
                    console.log("Essa é a lista de produtos:");
                    console.log(this._listaProdutos);
                }
            });
        } else {
            console.error("O produto não foi encontrado!");
        }
    }
}