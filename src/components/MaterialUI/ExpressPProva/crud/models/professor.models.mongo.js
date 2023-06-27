var mongoose = require("mongoose")

var ProfessorSchema = mongoose.Schema(
    {
        nome:{type:String,require},
        curso:{type:String,require},
        titulacao:{type:String,require}
    }
)

var ProfessorModel = mongoose.model("professores", ProfessorSchema)

module.exports = ProfessorModel