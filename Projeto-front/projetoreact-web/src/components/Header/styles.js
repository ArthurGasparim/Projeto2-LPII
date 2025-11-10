import styled from "styled-components";
export const Container = styled.div`
    width: 100%
    heigth:70px;
    background-color: #C0C0C0;
    border-bottom:3px solid #22B14C;
    display: flex;
    `

export const Esq = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    padding-left: 5px;
    img{
        width: 200px;
        height: 80px;
    }
`

export const Dir = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a{
        color: #FFF;
        font-weight:bold;
        text-decoration: none;
        margin: 0 10px;
        
        &:hover{
            color: #22B14C
        }
    }

    .divisor::after{
        content:"|";
        margin:0 10;
        color: #FFF;
    }

    #notificacao{
        img{
            width: 25px;
            height: 25px;
        }
        span{
            background-color: #FFF;
            color: #22B14C;
            padding: 3px 7px;
            border-radius: 50%;
            position:relative;
            top: -20px;
            right:10px;
        }
        
        &:hover{
            opacity:50%;
        }
    }
`