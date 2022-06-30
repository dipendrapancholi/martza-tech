import styled from 'styled-components';

export const ServicesProvideWrap = styled.section `
    padding: 127.73px 15px 194px;


    @media screen and (max-width:991px) and (min-width:767px){
        padding: 50px 15px;
    }

    @media screen and (max-width:767px){
        padding: 50px 15px;
    }
`
export const ServicesContainer = styled.div `
    max-width: 1271px;
    margin: 0 auto;
    width: 100%;
    @media screen and (max-width:1400px) and (min-width:1279px){
        max-width: 1150px;
    }
`
export const ServicesTagline = styled.p `
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    background: linear-gradient(90deg, #6E1FD8 0%, #E58EE7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin: 0 0 10px;
`
export const ServicesTitle = styled.h5 `
    font-weight: 500;
    font-size: 36px;
    line-height: 56px;
    color: #FFFFFF;
    text-align: center;
    margin: 0 0 42px;

    @media screen and (max-width:1024px) and (min-width:767px){
        font-size: 30px;
        line-height: normal;
    }
    @media screen and (max-width:767px){
        font-size: 25px;
        line-height: normal;
    }
`
export const ServicesProvideListing = styled.div `
    
`
export const ServicesListingItem = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
    padding: 40px 0;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 51.27%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0) 100%);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity:0.6;
    }

    @media screen and (max-width:1024px) and (min-width:767px){
        padding:30px 0;
    }
    @media screen and (max-width:767px){
        padding:30px 0;
    }
    
`
export const ServicesListingTitle = styled.div `
    width: 30%;

    @media screen and (max-width:767px){
        order:2;
        width: 100%;
        text-align:center;
    }
`
export const ServicesH3 = styled.h3 `
    font-weight: 500;
    font-size: 32px;
    line-height: 41px;
    color: #FFFFFF;
    margin:0;

    @media screen and (max-width:991px) and (min-width:767px){
        font-size: 24px;
        line-height: normal;
    }
    @media screen and (max-width:767px){
        font-size: 24px;
        line-height: normal;
        margin-bottom:25px;
    }
`
export const ServicesLisingImg = styled.div `
    width: 20%;

    @media screen and (max-width:767px){
        order:1;
        width: 100%;
        text-align:center;
    }
`
export const ServicesLisingImgUrl = styled.img `
    display: block;
    margin: 0 auto;
`
export const ServicesListingdescription = styled.div `
    width: 50%;

    @media screen and (max-width:767px){
        order:3;
        width: 100%;
    }
`
export const ServicesP = styled.p `
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
    opacity: 0.7;
    margin:0;

    @media screen and (max-width:1024px) and (min-width:767px){
        font-size: 16px;
        line-height: normal;
    }

`
export const SevicesBottomTextWrap = styled.div `
    padding: 14px 0;
    margin-top: 164px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 2px;
        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 51.27%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0) 100%);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity:0.6;
    }

    @media screen and (max-width:1024px) and (min-width:767px){
        margin-top: 75px;
    }
    @media screen and (max-width:767px){
        margin-top: 50px;
    }
`
export const SevicesBottomText = styled.p `
    font-weight: 400;
    font-size: 27px;
    line-height: 56px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    font-family: 'adieuregular';

    @media screen and (max-width:1024px) and (min-width:767px){
        font-size: 22px;
        line-height: normal;
    }
    @media screen and (max-width:767px){
        font-size: 20px;
        line-height: normal;
    }
`