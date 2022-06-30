import styled from 'styled-components';
import { Link } from 'react-router-dom'



export const HeaderContainer = styled.div `
    max-width: 1271px;
    margin: 0 auto;
    width:100%;

    @media screen and (max-width:1400px) and (min-width:1279px){
        max-width: 1150px;
    }
`
export const HeaderRow = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:31px 0;
    transition: all 500ms ease-in-out;

    @media screen and (max-width:767px){
        padding:15px 0;
    }
`
export const HeaderLogoCol = styled.div `

`
export const LogoLink = styled(Link)
`

`
export const Logo = styled.img `
    width: 174px;
    transition: all 500ms ease-in-out;
    
    @media screen and (max-width:767px){
        width: 100px;
    }
`
export const HeaderMenuCol = styled.div `

`
export const HeaderMenu = styled.ul `
    display: flex;
    flex-wrap: wrap;
    column-gap: 44.72px;

    @media screen and (max-width:767px){
        column-gap: 15px;
    }
`
export const HeaderMenuLi = styled.li `

    &:last-child a{
        padding: 11px 25px;
        background: #FFFFFF;
        border-radius: 57px;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #060420;

        &:hover{
            background: #1E1E1E;
            color: #ffffff;
        }

        @media screen and (max-width:767px){
            padding: 10px 15px;
            font-size: 14px;
        }
    }

`
export const HeaderMenuLink = styled(Link)
`
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;

    @media screen and (max-width:767px){
        font-size: 14px;
    }
`