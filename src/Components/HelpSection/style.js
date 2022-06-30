import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const HelpSetionWrap = styled.section`
    padding: 0 15px 181.07px;

    @media screen and (max-width:1024px) and (min-width:768px){
        padding: 0 15px 50px;
    }
    @media screen and (max-width:767px){
        padding: 0 15px 50px;
    }
`
export const HelpSetionTitle = styled.h2`
    font-weight: 800;
    font-size: 60.6166px;
    line-height: 94px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    font-family: 'gilroyBold';
    margin: 0 0 13.93px;

    & span{
        display:block;
    }

    @media screen and (max-width:1024px) and (min-width:768px){
        font-size: 40px;
        line-height: normal;
    }
    @media screen and (max-width:767px){
        font-size: 35px;
        line-height: normal;
    }
`
export const HelpSectionLink = styled(Link)`
    background: linear-gradient(92.69deg, #6E1FD8 3.99%, #9A00FF 27.98%, #E58EE7 52.25%);
    border-radius: 10.342px;
    border:2px solid #B15BE1;
    text-decoration: none;
    font-weight: 400;
    font-size: 15.9831px;
    line-height: 19px;
    text-transform: capitalize;
    color: #ffffff;
    box-shadow: 0px 3.760723114013672px 3.760723114013672px 0px #00000040;
    padding: 20.66px 0px;
    width: 203.08px;
    display: flex;
    margin: 0 auto;
    font-family: 'adieuregular';
    align-items: center;
    justify-content: center;
    transition: background 500ms ease-in-out;
    overflow:hidden;

    &:hover{
        background: linear-gradient(92.69deg, #E58EE7 3.99%, #9A00FF 27.98%, #6E1FD8 52.25%);
    }
    & svg{
        font-size: 27px;
        position: relative;
        top: -2px;
        left:0;
        transition: all 500ms ease-in-out;
    }
    &:hover svg{
        left:100px;
    }
    & svg path{
        stroke: #ffffff;
    }
`


