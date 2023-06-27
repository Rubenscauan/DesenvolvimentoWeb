var express = require('express');
var router = express.Router();
var professorService = require('../services/professorservice');
const ProfessorService = require('../services/professorservice');
var professorServiceMongo = require('../services/professorservice.mongo');

/*router.get(
    '/listar',
    (req, res, next) => {
        res.json(professorService.list())
    }
)*/

router.get(
    "/listar",
    (req,res,next) =>{
        professorServiceMongo.list(req,res)
    }
)

/*router.post(
    '/registrar',
    (req, res, next) => {
        const professor = ProfessorService.register(req.body);
        res.json(professor);
    }
)*/

router.post(
    '/registrar',
    (req,res,next) => {
        professorServiceMongo.register(req,res)
    }
)


router.delete('/deletar/:id',
    function (req, res, next) {
        professorServiceMongo.delete(req,res)
    }
);

router.get('/recuperar/:id',
    function (req, res, next) {
        professorServiceMongo.retrieve(req,res)
    }
);
router.put(
    '/atualizar/:id',
    (req, res, next) => {
        professorServiceMongo.update(req,res)
    }
)

module.exports = router;
