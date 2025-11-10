import React from "react";
import Header from "../../components/Header";
import * as Style from './styles'
import Footer from "../../components/Footer";
import FiltrarConsulta from "../../components/ConsultaFiltrar";

function Home() {
  return (

    <Style.Container>
        <Header/>
        <Style.AreaFiltro>
          <FiltrarConsulta titulo="Todos"/>
          <FiltrarConsulta titulo="Hoje"/>
          <FiltrarConsulta titulo="Semana"/>
          <FiltrarConsulta titulo="Mês"/>
          <FiltrarConsulta titulo="Ano"/>
        </Style.AreaFiltro>
          
        <Footer/>
    </Style.Container>
    //Tela home esta renderizando oq eu tenho dentro do headder
    
  );
}   

export default Home;
