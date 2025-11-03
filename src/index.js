const express = require('express')

const api = express()

//para a api saber que estamos recebendo e devolvendo informações JSON
api.use(express.json())


//importar o routes
const ConsultaRoutes = require("./routes/ConsultaRoutes")
api.use('/consulta',ConsultaRoutes)
api.get("/teste",(req,res)=>{
    res.send("Testando API")
})

api.listen(3000,()=>{
    console.log("API online")
})