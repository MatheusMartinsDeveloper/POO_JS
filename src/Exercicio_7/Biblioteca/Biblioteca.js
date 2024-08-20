export default class Biblioteca {
    constructor() {
        this.livros = [{
            tituloLivro: "Código Limpo",
            autorLivro: "Robert Martins"
        },
        {
            tituloLivro: "O Codificador Limpo",
            autorLivro: "Robert Martin"
        },
        {
            tituloLivro: "O Investidor Inteligente",
            autorLivro: "Benjamim Graham"
        }, 
        {
            tituloLivro: "A bola de neve: Warren Buffett e o negócio da vida",
            autorLivro: "Alice Schroederl"
        }
        ];
    }

    buscarLivro(titulo, autor) {
        if (titulo && autor) {
            const encontrarLivro = this.livros.find(livro => livro.tituloLivro === titulo && livro.autorLivro == autor);
            
            console.log("Livro encontrado com sucesso!");
            console.log(encontrarLivro);
        } else {
            console.log("O livro não foi encontrado!");
        }
    }
}