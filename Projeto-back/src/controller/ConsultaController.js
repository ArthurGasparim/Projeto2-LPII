const express = require("express")
const ConsultaModel = require("../model/ConsultarModel")

//criar uma classe para que toda a regra seja implementada dentro dela
//quando eu quiser chamar uma função sera necessário fazer a chamada do nome da classe.nomeDaFuncao
class ConsultaController{

     async criar(req,resp){
        //vamos pegar por requisicao tudo o que chega do body 
        //somente os dados obrigatórios
        const consulta = new ConsultaModel(req.body)

        //esperar a consulta salvar
        await consulta
                .save()//salva no mondo
                .then(resposta =>{
                    return resp.status(200).json(resposta)
                    //se tudo der certo retorna um json com as informações escritas no banco
                })
                .catch(erro =>{
                    return resp.status(500).json(erro)
                })
    
        }

        async atualizar(req,resp){
            //resgatar os dados da consulta do mongo
            //buscar uma consulta pelo id
            //vamos passar no body da req as solicitações de açteração
            //o proprio mongo identifica se a collection foi atualizada
            //a propriedade new:true significa que sempre vai me retornar os dados da consulta atualizada 
            //devolvendo para o servidor uma resposta com a consultaatualizada
            await ConsultaModel.findByIdAndUpdate({"_id":req.params.id},req.body,{new : true})
            .then(resposta =>{
                return resp.status(200).json(resposta)
            })
            .catch(erro =>{
                return resp.status(500).json(erro)
            })
        } 


}

module.exports = new ConsultaController()