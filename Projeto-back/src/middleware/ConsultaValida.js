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
    //Validar se existe consulta no mesmo dia e no mesmo horário
    //criar variável vazia
    let existe
    //validar se ao atualizar já existe consulta na data
    if(req.params.id){
        existe = await ConsultaModel.findOne({'data': {'$eq': new Date(data)},
        //operador not exist -> $ne
        //ne -->id diferente de QUALQUER coisa do parametro id
        // ele irá comparar com os outros ids das consultas da colection
        '_id':{'$ne': req.params.id}
    })
    }else{
        //Buscar na collection a consulta pela mesma data
        //vou usar o campo da data para validação
        //mongo --> comparar $eq
        existe = await ConsultaModel.findOne({'data':{$eq:new Date(data)}})
    }
    
    if (existe){
        return resp.status(400).json({erro: "Já existe uma consulta para essa data"})
    }

        next()
    }
}

module.exports = ConsultaValida
