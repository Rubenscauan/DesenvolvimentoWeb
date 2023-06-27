const ProfessorModel = require('../models/professor.models')

let professores = [
]

let id = 0;

class ProfessorService{

    static list(){
        return professores;
    }

    static register(data){
        let professor = new ProfessorModel(
            id++, data.nome, data.curso, data.titulacao
        )
        professores.push(professor);
        return professor;
    }

    static update(id, data){
        for(let professor of professores){
            if(professor.id == id){
                professor.nome = data.nome;
                professor.curso = data.curso;
                professor.titulacao = data.titulacao;
                return professor;
            }
        return null;
        }
        
    }

    static retrieve(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                return professores[i]
            }
        }
        return {}
    }

    static delete(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                professores.splice(i, 1)
                return true
            }
        }
        return false
    }
}

module.exports = ProfessorService


