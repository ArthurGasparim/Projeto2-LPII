//chamar o meu model
const ConsultaModel = require("../model/ConsultarModel")

//importar o -date-fns
//do date fns iremos utilizar a função isPast
const {isPast} = require("date-fns")
const ConsultaValida = async(req,resp, next) =>{

    //criar as constantes para desestruturação dos dados
    //dados enviados via body da requisicao
    const tipo = req.body.tipo
    const paciente = req.body.paciente
    const descricao = req.body.descricao
    const data = req.body.data
    if(!tipo)
        return resp.status(400).json({erro: "tipo da consulta obrigatoria"})
    else
        if(!paciente)
        return resp.status(400).json({erro: "paciente da consulta obrigatoria"})
    else
        if(!descricao)
        return resp.status(400).json({erro: "descricao da consulta obrigatoria"})
    else
        if(!data)
        return resp.status(400).json({erro: " data da consulta obrigatoria"})
    //validar a data passada
    else
        if(isPast(new Date(data)))
            return resp.status(400).json({erro: "Esocolha uma data futura"})
    else{
        next()
    }
}

module.exports = ConsultaValida
