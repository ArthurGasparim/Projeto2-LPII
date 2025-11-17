import React,{useState} from "react";
import Header from "../../components/Header";
import * as Style from './styles'
import Footer from "../../components/Footer";
import FiltrarConsulta from "../../components/ConsultaFiltrar";
import ConsultaCartao from "../../components/ConsultaCartao/index"
import api from "../../services/api";
import { useEffect } from "react";
import tipoIcones from "../../utils/tipoIcones.js";

function ConsultaDetalhes() {
  const [atrasadas, atualizaAtrasadas] = useState()
  const [tipo,atualizarTipo] = useState()
  async function verificaAtrazadas() {
    await api.get("/consulta/atrasadas")
    .then(resp =>
      atualizaAtrasadas(resp.data.length)
    )
  }

  useEffect(()=>{
    verificaAtrazadas()
  },[])
  
  return (

    <Style.Container>
        <Header atrasadas = {atrasadas}/>
            <Style.Formulario>
                <Style.tipoIcones>
                    {
                        tipoIcones.map((icone,index)=>(
                            index>0 &&
                            <button type="button" onClick={()=>atualizarTipo(index)}>
                                <img src={icone} alt='Tipo consulta'
                                className={tipo&&tipo != index && 'inativa'}/>
                            </button>
                        ))
                    }

                   
                </Style.tipoIcones>
                 <Style.Input>
                        <span>Paciente</span>
                        <input type='text' placeholder="Nome do paciente"></input>
                 </Style.Input>
                 <Style.Input>
                        <span>Descricao</span>
                        <textarea rows={5} placeholder="Descrição da queixa"></textarea>
                 </Style.Input>
                 <Style.Input>
                        <span>Data</span>
                        <input type='date'/>
                 </Style.Input>
                 <Style.Input>
                        <span>Hora</span>
                         <input type='time'/>
                 </Style.Input>
                 <Style.Opcao>
                        <div>
                            <input type="checkbox"/>
                            <span>Concluida</span>
                        </div>
                        <button type="button">EXCLUIR</button>
                 </Style.Opcao>
                 <Style.Salvar>
                        <button type="button">SALVAR</button>
                    </Style.Salvar>
            </Style.Formulario>
        <Footer/>
    </Style.Container>
    
  );
}   

export default ConsultaDetalhes;
