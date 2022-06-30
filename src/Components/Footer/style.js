import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const FooterTop = styled.div `
    padding-bottom:111px;

    @media screen and (max-width:1024px) and (min-width:768px){
        padding-bottom:50px;
    }
    @media screen and (max-width:767px){
        padding-bottom:50px;
    }
`
export const FooterContainer = styled.div `
    max-width: 1271px;
    margin: 0 auto;
    width: 100%;

    @media screen and (max-width:1400px) and (min-width:1279px){
        max-width: 1150px;
    }
`

export const FooterRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 0 -40px;
    justify-content: space-between;

    @media screen and (max-width:1024px){
       margin: 0;
    }
`

export const FooterCol = styled.div `
    width:33.33%;
    padding:0 40px;

    @media screen and (max-width:1024px) and (min-width:768px){
        padding:0 0 40px;
    }
    @media screen and (max-width:767px){
        width:100%;
        padding:0 0 40px;
    }
`

export const FooterColInner = styled.div `
    
`

export const FooterColTitle = styled.h4 `
    font-weight: 400;
    font-size: 33.93px;
    line-height: 41px;
    text-transform: capitalize;
    color: #FFFFFF;
    margin: 0 0 43px;
    font-family: 'adieuregular';

    @media screen and (max-width:1024px){
        font-size: 23.93px;
        line-height: 31px;
        margin: 0 0 15px;
    }
`

export const FooterMenu = styled.ul `

`

export const FooterMenuLi = styled.li `
    margin-bottom:25px;
    @media screen and (max-width:1024px){
        margin-bottom:15px;
    }
`
export const FooterMenuLink = styled(Link)
`
    font-weight: 300;
    font-size: 33.93px;
    line-height: 36px;
    color: #FFFFFF;
    text-decoration: none;
    font-family: 'gilroylight';
    transition: all 500ms ease-in-out;
    position: relative;
    left: 0;
    display: flex;
    &:hover{
        left:15px;
        color: #fccd4b;
    }
    &:hover svg path{
        stroke: #fccd4b;
    }
    & span{
        display: block;
        width: calc(100% - 30px);
    }
    & svg{
        position: relative;
        top: 5px;
        font-size: 30px;
        width: 30px;
        height: 30px;
        
        @media screen and (max-width:1024px){
            font-size: 20px;
            width: 20px;
            height: 20px;
            top: 1px;
        }
    }
    & svg path {
        stroke: #ffffff;
        transition: all 500ms ease-in-out;
    }


    @media screen and (max-width:1024px){
        font-size: 18px;
        line-height: 24px;
    }
`

export const FooterBottom = styled.div `
    
`
export const FooterBottomCol = styled.div `
    padding:0 40px;

    @media screen and (max-width:1024px) and (min-width:768px){
        padding:0;
    }
    @media screen and (max-width:767px){
        width: 100%;
        padding: 0;
        text-align: center;
    }
`
export const FooterCopyRights = styled.p `
    font-family: 'gilroylight';
    font-weight: 300;
    font-size: 24.93px;
    line-height: 36px;
    text-transform: capitalize;
    color: #FFFFFF;

    @media screen and (max-width:767px){
        font-size: 16px;
        line-height: 20px;
        margin-bottom:30px;
    }
`
export const FooterSocialMedia = styled.ul `
    display: flex;
    align-items: center;
    column-gap: 43.38px;
`
export const FooterSmLi = styled.li `

`
export const FooterSmLiLink = styled(Link)
`
    color: #ffffff;
    line-height: normal;
    display: block;
    font-size: 19.6px;
    width: 35px;
    height: 35px;
    background: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 500ms ease-in-out;

    &:hover{
        background:#fccd4b;
    }
    &:hover svg{
        fill:#000000;
    }
`
