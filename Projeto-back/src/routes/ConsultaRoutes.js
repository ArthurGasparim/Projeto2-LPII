//importar o express
const express = require('express')
const rota = express.Router()


//importar o módulo interno do controller
const ConsultaController = require("../controller/ConsultaController")

//importar o arquivo de validação
const ConsultaValida = require("../middleware/ConsultaValida")


//todas as vezes que chegar uma req do tipo post em /consulta
//vou chamar o ConsultaController
//post para receber
rota.post("/",ConsultaValida,ConsultaController.criar)

rota.put('/:id',ConsultaValida,ConsultaController.atualizar)
rota.put('/concluida/:id/:termino',ConsultaController.concluida)

rota.get("/hoje",ConsultaController.consultasHoje)

rota.get("/todas",ConsultaController.listar)

rota.get("/listar/:id",ConsultaController.consulta)

rota.delete('/deletar/:id',ConsultaController.deletar)

rota.get("/atrasadas",ConsultaController.atrasadas)

module.exports = rota