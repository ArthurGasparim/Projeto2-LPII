import React from "react"
import Home from '../views/ConsultaHome'
import Consultas from '../views/ConsultaDetalhes'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/formulario" element={<Consultas/>}/>
                <Route path="/formulario/:idC" element={<Consultas/>}/>
            </Routes>
        </Router>
    )
}

