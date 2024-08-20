export default class Turma {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        if (aluno) {
            this.alunos.push(aluno);
            console.log("O aluno foi adicionado com sucesso!");
        } else {
            console.error("O aluno não foi adicionado!");
        }

        console.log("Essa é a lista de alunos da turma:");
        console.log(this.alunos);
    }

    removerAluno(nome, sobrenome) {
        if (nome && sobrenome) {
            const buscarAluno = this.alunos.findIndex(aluno => aluno.nomeAluno === nome && aluno.sobrenomeAluno === sobrenome);
            const removerAluno = this.alunos.splice(buscarAluno);
            
            if (removerAluno) {
                console.log("Aluno removido com sucesso!");
                console.log("Essa é a lista de alunos da turma:");
                console.log(this.alunos);
            } else {
                console.log("Erro ao encontrar o aluno!");
            }
        }
    }
}