import PromptSync from "prompt-sync";
import Turma from "./Turma/Turma.js";
import Biblioteca from "./Biblioteca/Biblioteca.js";

function main() {
    let loop = true;
    const prompt = PromptSync();
    const instanciaTurma = new Turma();
    const instanciaBiblioteca = new Biblioteca();

    while (loop) {
        console.log("Digite 1 para entra no menu Turma!");
        console.log("Digite 2 para entrar no menuo Biblioteca!");
        console.log("Digite 3 para encerrar!");
        const escolhaMenu = parseInt(prompt());

        switch (escolhaMenu) {
            case 1: {
                console.log("Você entrou no menu Turma!");
                console.log("Digite 1 para adicionar um aluno!");
                console.log("Digite 2 para remover um aluno!");
                console.log("Digite 3 para voltar!");
                const menuTurma = parseInt(prompt());

                if (menuTurma == 1) {
                    console.log("Digite o Nome do Aluno:")
                    const nomeAluno = prompt();

                    console.log("Digite o Sobrenome do Aluno:");
                    const sobrenomeAluno = prompt();

                    if (nomeAluno && sobrenomeAluno && typeof nomeAluno == "string" && typeof sobrenomeAluno == "string") {
                        const aluno = {
                            nomeAluno: nomeAluno,
                            sobrenomeAluno: sobrenomeAluno
                        };

                        instanciaTurma.adicionarAluno(aluno);
                    } else {
                        console.log("As informação não são válidas!");
                    }
                } else if (menuTurma == 2) {
                    console.log("Digite o Nome do Aluno que deseja remover:");
                    const nomeAluno = prompt();

                    console.log("Digite o Sobrenome do Aluno que deseja remover:");
                    const sobrenomeAluno = prompt();

                    if (nomeAluno && sobrenomeAluno && typeof nomeAluno == "string" && typeof sobrenomeAluno == "string") {
                        instanciaTurma.removerAluno(nomeAluno, sobrenomeAluno);
                    } else {
                        console.log("As informação não são válidas!");
                    }
                } else if (menuTurma == 3) {
                    continue;
                } else {
                    console.log("Essa opção não é válida!");
                }

            } break;

            case 2: {
                console.log("Você entrou no menu Biblioteca!");
                console.log("Digite o Titulo do Livro:");
                const nomeLivro = prompt();

                console.log("Digite o Autor do Livro:");
                const autorLivro = prompt();

                if (nomeLivro && autorLivro && typeof nomeLivro === "string" && typeof autorLivro === "string") {
                    instanciaBiblioteca.buscarLivro(nomeLivro, autorLivro);
                } else {
                    console.log("As informações não são válidas!");
                }
            } break;

            case 3: {
                console.log("Você encerrou!");
                loop = false;
            } break;

            default: {
                console.log("Essa opção não é válida!");
            }
        }
    }
}

main();