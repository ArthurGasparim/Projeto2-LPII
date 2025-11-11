const express = require('express')
const cors = require('cors')    
const api = express()
api.use(cors())
//para a api saber que estamos recebendo e devolvendo informações JSON
api.use(express.json())



//importar o routes
const ConsultaRoutes = require("./routes/ConsultaRoutes")
api.use('/consulta',ConsultaRoutes)
api.get("/teste",(req,res)=>{
    res.send("Testando API")
})

api.listen(5000,()=>{
    console.log("API online")
})