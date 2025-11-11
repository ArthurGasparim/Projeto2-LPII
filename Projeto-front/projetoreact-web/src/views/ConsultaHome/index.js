import React,{useState} from "react";
import Header from "../../components/Header";
import * as Style from './styles'
import Footer from "../../components/Footer";
import FiltrarConsulta from "../../components/ConsultaFiltrar";
import ConsultaCartao from "../../components/ConsultaCartao/index"

function Home() {
  //criar uma constante (vetor)
  //no vetor --> primeiro parâmetro sera o estado que está a página atualizada
  // --> segundo parâmetro será uma função para atualizar o estado
  //nala que habilito qual estado esta sendo atualizado
  //funcao --> atualiza filtro ativo
  const [filtroAtivo, atualizaFiltroAtivo] = useState('hoje');
  
  return (

    <Style.Container>
        <Header/>
        <Style.AreaFiltro>
          <button type="button" onClick={() => atualizaFiltroAtivo("todos")}>
               <FiltrarConsulta titulo="Todos" ativo = {filtroAtivo == "todas"}/>
          </button>
         
          <button type="button" onClick={() => atualizaFiltroAtivo("hoje")}>
            <FiltrarConsulta titulo="Hoje" ativo = {filtroAtivo == "hoje"}/>
          </button>
          
          
          <button type="button" onClick={() => atualizaFiltroAtivo("semana")}>
            <FiltrarConsulta titulo="Semana"ativo = {filtroAtivo == "semana"}/>
          </button>
          
          
          <button type="button" onClick={() => atualizaFiltroAtivo("mes")}>
            <FiltrarConsulta titulo="Mês" ativo = {filtroAtivo == "mes"}/>
          </button>
          
          
          <button type="button" onClick={() => atualizaFiltroAtivo("ano")}>
            <FiltrarConsulta titulo="Ano" ativo = {filtroAtivo == "ano"}/>
            </button>
          
        </Style.AreaFiltro>

        <Style.Titulo>
          <h3>Consultas</h3>
        </Style.Titulo>

        <Style.Conteudo>
          <ConsultaCartao></ConsultaCartao>
          <ConsultaCartao></ConsultaCartao>
          <ConsultaCartao></ConsultaCartao>
          <ConsultaCartao></ConsultaCartao>
          <ConsultaCartao></ConsultaCartao>
        
        </Style.Conteudo>
        <Footer/>
    </Style.Container>
    //Tela home esta renderizando oq eu tenho dentro do headder
    
  );
}   

export default Home;
