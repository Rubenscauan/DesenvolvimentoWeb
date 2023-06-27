var express = require('express')
var router = express.Router()
var alunoService = require('../services/alunoService.mongo')
const ProfessorService = require('../services/professorservice.mongo')

router.get(
    "/listar",
    (req,res,next)=>{
        alunoService.list(req,res)
    }
)

router.post(
    "/registrar",
    (req,res,next)=>{
        alunoService.register(req,res)
    }
)

router.delete(
    "/deletar/:id",
    (req,res,next)=>{
        alunoService.delete(req,res)
    }
)

router.get('/recuperar/:id',
    function (req, res, next) {
        alunoService.retrieve(req,res)
    }
);
router.put(
    '/atualizar/:id',
    (req, res, next) => {
        alunoService.update(req,res)
    }
)

module.exports = router;
