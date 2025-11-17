import React from "react";
import * as Styl from './styles'
import logo from '../../assets/logo.png'
import sino from '../../assets/sino.png'

function Header({atrasadas, notificacaoClick}) {
  return (
    <Styl.Container>
        <Styl.Esq>
            <img src={logo} alt="logo"/>
        </Styl.Esq>
        <Styl.Dir>
            <a href="#">Inicio</a>
            <span className="divisor"/>
            <a href ="#">Nova Consulta</a>
            <span className="divisor"/>
            <button onClick={notificacaoClick} id="notificacao">
                <img src={sino} alt="Notificação"/>
                <span>{atrasadas}</span>
            </button>
        </Styl.Dir>
    </Styl.Container>
  );
}

export default Header;
