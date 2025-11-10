import React from "react";
import * as Styl from './styles'
import logo from '../../assets/logo.png'
import sino from '../../assets/sino.png'

function Header() {
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
            <a href="#" id="notificacao">
                <img src={sino} alt="Notificação"/>
                <span>5</span>
            </a>
        </Styl.Dir>
    </Styl.Container>
  );
}

export default Header;
