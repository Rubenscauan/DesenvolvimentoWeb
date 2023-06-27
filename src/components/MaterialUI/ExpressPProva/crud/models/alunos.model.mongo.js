var mongoose = require("mongoose")

var alunoSchema = mongoose.Schema(
    {
        nome:{type: String, require},
        curso:{type: String, require},
        ira: {type: Number, require}
    }
)

var alunoModel = mongoose.model("alunos", alunoSchema)

module.exports = alunoModel