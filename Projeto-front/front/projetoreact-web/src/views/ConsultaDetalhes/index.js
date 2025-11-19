import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import * as Styl from './styles'
import Footer from '../../components/Footer';
import api from '../../services/api'
import tipoIcones from '../../utils/tipoIcones'
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

function ConsultaDetalhes() {
    const [atrasadas, atualizaAtrasadas] = useState()
    const [tipo , atualizarTipo] = useState()

    //criar estados para armazenar os dados da consulta que vem do banco
    const [id, atualizaId] = useState();
    const [concluida, atualizaConcluida] = useState(false);
    const [paciente, atualizaPaciente] = useState();
    const [descricao, atualizaDescricao] = useState();
    const [dia, atualizaDia] = useState();
    const [hora, atualizaHora] = useState();

    const {idC} = useParams()
    async function carregarConsulta() {
        await api.get(`/consulta/buscar/${idC}`)
        .then(resp =>{
            atualizarTipo(resp.data.tipo)
            atualizaPaciente(resp.data.paciente)
            atualizaDescricao(resp.data.descricao)
            atualizaConcluida(resp.data.concluida)
            atualizaDia(format(new Date(resp.data.data), 'yyyy-MM-dd'))
            atualizaHora(format(new Date(resp.data.data), 'HH:mm'))
        })
    }

    async function verificaAtrasadas() {
    await api.get('/consulta/atrasadas')
    .then(resp=>
        atualizaAtrasadas(resp.data.length)
    )
    }
    async function salvar(){
        if(idC){
            await api.put('/consulta/'+idC,{
            tipo,
            paciente,
            descricao,
            data: `${dia}T${hora}:00.000`
        })
        .then(()=>{
            alert("Consulta atualizada");
        })
        }
        else{
            await api.post('/consulta',{
            tipo,
            paciente,
            descricao,
            data: `${dia}T${hora}:00.000`
        })
        .then(()=>{
            alert("Consulta cadastrada");
        })
        }
        
    }

    useEffect(()=>{
    carregarConsulta()
    verificaAtrasadas()
    }, [])

    return  (
        <Styl.Container>
            <Header atrasadas = {atrasadas} />
                <Styl.Formulario>
                    <Styl.TipoIcones>
                        {   
                            tipoIcones.map((icone, index)=>(
                                   index>0&&
                                    <button type='button' onClick={()=>atualizarTipo(index)}>
                                        <img src={icone} alt='Tipo consulta'
                                        className={tipo && tipo != index && 'inativa'}/>
                                    </button>
                                        
                            ))
                        }
                    </Styl.TipoIcones>

                    <Styl.Input>
                        <span>Paciente</span>    
                        <input type='text' placeholder='Nome do paciente'
                        onChange={e=>atualizaPaciente(e.target.value)} value={paciente}/>
                    </Styl.Input>
                    
                    <Styl.TextArea>
                        <span>Descrição</span>    
                        <textarea rows={5} placeholder='Descrição da queixa'
                        onChange={e=>atualizaDescricao(e.target.value)} value={descricao}/>
                    </Styl.TextArea>

                    <Styl.Input>
                        <span>Data</span>    
                        <input type='date'
                        onChange={e=>atualizaDia(e.target.value)} value={dia}/>
                    </Styl.Input>

                    <Styl.Input>
                        <span>Hora</span>    
                        <input type='time'
                        onChange={e=>atualizaHora(e.target.value)} value={hora}/>
                    </Styl.Input>

                    <Styl.Opcao>
                        <div>
                            <input type='checkbox'
                            onChange={e=>atualizaConcluida(e.target.value)} value={!concluida}/>
                            <span>CONCLUÍDA</span>
                        </div>
                        <button type='button'>EXCLUIR</button>
                    </Styl.Opcao>

                    <Styl.Salvar>
                        <button type='button' onClick={salvar}>SALVAR</button>
                    </Styl.Salvar>

                </Styl.Formulario>
            <Footer/>
        </Styl.Container>
    )
}

export default ConsultaDetalhes;
