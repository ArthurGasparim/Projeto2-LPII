//constante para o mongoose
const mongoose = require("../config/db")

// schema --> representação de informações que serão definidas para armazenar no banco de dados
const Schema = mongoose.Schema

//criar o arquivo de configuração

const ConsultaSchema = new Schema({
    //as informações armazenadas no banco de dados
    tipo:{type: Number, required: true},
    paciente: {type: String, required:true},
    descricao: {type: String, required:true},
    //Data no mongo por padrão é dia mes ano hora min seg mils 
    data: {type: Date, required:true},
    termino: {type: Boolean, default: false},
    criada: {type: Date, default: Date.now()}
})

//exportar = com a nomenclatura de consulta
module.exports = mongoose.model('Consulta',ConsultaSchema)