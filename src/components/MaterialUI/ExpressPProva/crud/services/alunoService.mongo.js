const alunoModel = require("../models/alunos.model.mongo")

class AlunoService {
    static list(req,res){
        alunoModel.find()
        .then(
            (alunos) =>{
                res.status(201).json(alunos)
            }
        )
    }

    static register(req,res){
        alunoModel.create(req.body)
        .then(
            (alunos)=>{
                res.status(201).json(alunos)
            }
        )
    }

    static delete(req,res,next){
        alunoModel.findByIdAndRemove(req.params.id)
        .then(
            (alunos)=>{
                res.status(201).json(alunos)
            }
        )
    }

    static retrieve(req,res,next){
        alunoModel.findById(req.params.id)
        .then(
            (aluno)=>{
                res.status(201).json(aluno)
            }
        )
    }


    static update(req,res){
        alunoModel.findByIdAndUpdate(req.params.id,req.body,{'new':true})
        .then(
            (aluno)=>{
                res.status(201).json(aluno)
            }
        )
    }

}

module.exports = AlunoService