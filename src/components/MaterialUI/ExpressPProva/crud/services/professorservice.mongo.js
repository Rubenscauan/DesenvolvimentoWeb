const ProfessorModel = require("../models/professor.models.mongo")

class ProfessorService {

    static list(req,res){
        ProfessorModel.find()
        .then(
            (professores)=>{
                res.status(201).json(professores)
            }
        )
    }

    static register(req,res){
        ProfessorModel.create(req.body)
        .then(
            (professor)=>{
                res.status(201).json(professor)
            }
        )
    }

    static delete(req,res,next){
        ProfessorModel.findByIdAndRemove(req.params.id)
        .then(
            (professor)=>{
                res.status(201).json(professor)
            }
        )
    }

    static retrieve(req,res,next){
        ProfessorModel.findById(req.params.id)
        .then(
            (professor)=>{
                res.status(201).json(professor)
            }
        )
    }

    static update(req,res){
        ProfessorModel.findByIdAndUpdate(req.params.id,req.body,{'new':true})
        .then(
            (professor)=>{
                res.status(201).json(professor)
            }
        )
    }

    
}

module.exports = ProfessorService