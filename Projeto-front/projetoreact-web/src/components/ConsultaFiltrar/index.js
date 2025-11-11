import React from "react";
import * as Styl from './styles'
import filtro from "../../assets/filtro.png"


//armazenar a situação de um filtro ativo
function FiltrarConsulta({titulo,ativo}) {
  return (
    <Styl.Container ativo = {ativo.toString()}>
        <img src={filtro} alt="Filtro"/>
        <span>{titulo}</span>
    </Styl.Container>
  );
}

export default FiltrarConsulta;
