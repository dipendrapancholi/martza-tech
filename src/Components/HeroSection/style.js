import styled from 'styled-components';
import { Link } from 'react-router-dom'

import bg_img from '../../images/bg-banner.svg'


export const HeroWrap = styled.section `
    padding: 214px 15px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    background-image: url(${bg_img});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 1230px;
    background-position: 50% 50%;

    @media screen and (max-width:1024px) and (min-width:768px){
        padding: 180px 0 85px;
    }
    @media screen and (max-width:767px){
        padding: 130px 0 0;
    }
`
export const HeroContainer = styled.div `
    max-width: 1271px;
    margin: 0 auto;
    width: 100%;
    
    @media screen and (max-width:1400px) and (min-width:1279px){
        max-width: 1150px;
    }
    @media screen and (max-width:1024px) and (min-width:768px){
        padding: 0px 15px;
    }
    @media screen and (max-width:767px){
        padding: 0px 15px;
    }
`
export const HeroSubTitle = styled.p `
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    background: linear-gradient(90deg, #6E1FD8 0%, #E58EE7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin:0 0 10px;
`
export const HeroTitle = styled.h3 `
    font-style: normal;
    font-weight: 500;
    font-size: 72px;
    line-height: 80px;
    color: #FFFFFF;
    margin:0 0 28px;

    & span{
        display:block;

        @media screen and (max-width:767px){
            display:inline;
        }
    }

    @media screen and (max-width:1024px) and (min-width:768px){
        font-size: 50px;
        line-height: 67px;
    }
    @media screen and (max-width:767px){
        font-size: 40px;
        line-height: normal;
    }
`
export const HeroDesc = styled.p `
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
    opacity: 0.7;
    margin:0 0 40px;

    & span{
        display:block;

        
        @media screen and (max-width:767px){
            display:inline;
        }
    }
`
export const HeroLink = styled(Link)
`
    background: linear-gradient(92.69deg, #6E1FD8 3.99%, #9A00FF 27.98%, #E58EE7 52.25%);
    border-radius: 57px;
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: #ffffff;
    padding: 12px 32px;
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    color: #FFFFFF;
    width: 313px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transition: all 500ms ease-in-out;
    overflow:hidden;

    &:hover{
        background: linear-gradient(92.69deg, #E58EE7 3.99%,#9A00FF 27.98%,#6E1FD8 52.25%);
    }

    & svg{
        position: absolute;
        font-size: 33px;
        right: 35px;
        transition: all 500ms ease-in-out;
    }
    &:hover svg{
        right:-100px;
    }
    & svg path{
        stroke: #ffffff;
    }
`


export const HeroImage = styled.img `

    @media screen and (max-width:1024px) and (min-width:768px){
        margin: 0 auto;
        width: 600px;
    }
    @media screen and (max-width:767px){
        margin: 0 auto;
        width: 100%;
    }
`

export const HeroMarquee = styled.div `
    background: #6E1FD9;
    border: 3px solid #FFFFFF;
    padding: 35px 0;
    border-right: 0;
    margin: 0 -15px;
    border-left: 0;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;

    @media screen and (max-width:1024px) and (min-width:768px){
        padding: 33px 0;
        margin: 0;
    }
    @media screen and (max-width:767px){
        padding: 20px 0;
        margin: 0;
    }
`

export const HeroMarqueeText = styled.h4 `
    font-weight: 500;
    font-size: 46px;
    line-height: 58px;
    text-transform: capitalize;
    color: #FFFFFF;
    margin:0;
    -webkit-animation: scrolling-left1 20s linear infinite;
    animation: scrolling-left1 20s linear infinite;
    white-space: nowrap;

    @media screen and (max-width:1024px) and (min-width:768px){
        font-size: 35px;
        line-height: normal;
    }
    @media screen and (max-width:767px){
        font-size: 25px;
        line-height: normal;
    }
`