import styled from "styled-components";
export const Container = styled.div`
    width: 300px;
    heigth: 100px;
    background: ${prop=>prop.ativo ? '#22B14c' : ' #C0C0C0'};
    display: flex;
    padding: 10px;
    cursor:pointer;
    /*arredondar*/
    border-radius: 5px;
    /*deixar um embaixo do outro*/
    flex-direction:column;
    justify-content:space-around;
    
    img{
        width: 25px;
        height:25px;
    }

    

    span{
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size:18px;
    }

    &:hover{
        background-color: #22B14C;
    }

    
    `

