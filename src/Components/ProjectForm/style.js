import styled from 'styled-components';

export const ProjectFormWrap = styled.section `

`

export const ProjectFormContainer = styled.div `
    max-width: 1271px;
    margin: 0 auto;
    width: 100%;

    @media screen and (max-width:1400px) and (min-width:1279px){
        max-width: 1150px;
    }
`

export const ProjectFormInner = styled.div `
    padding: 78px 101px;
    background: #000000;
    border-radius: 22.0089px;

    @media screen and (max-width:1024px) and (min-width:768px){
        padding: 50px 30px;
        margin:0 15px;
    }
    @media screen and (max-width:767px){
        padding: 50px 30px;
    }
`

export const ProjectRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export const ProjectCol = styled.div `
    width: 60%;

    &:last-child{
        width: 40%;

        @media screen and (max-width:1024px) and (min-width:768px){
            order:1;
            width: 100%;
        }
        @media screen and (max-width:767px){
            order:1;
            width: 100%;
        }
    }
    @media screen and (max-width:1024px) and (min-width:768px){
        width: 100%;
        order: 2;
    }
    @media screen and (max-width:767px){
        width: 100%;
        order: 2;
    }
`

export const ProjectMainForm = styled.form `
    width: 562px;

    @media screen and (max-width:1024px) and (min-width:768px){
        width: 100%;
    }
    @media screen and (max-width:767px){
        width: 100%;
    }
`

export const ProjectColTitle = styled.h3 `
    font-weight: 500;
    font-size: 61.6249px;
    line-height: 64px;
    text-align: right;
    text-transform: capitalize;
    color: #FFFFFF;
    margin: 0;
    position: relative;

    & span{
        @media screen and (max-width:1024px) and (min-width:768px){
            display:block;
        }
    }
    @media screen and (max-width:1024px) and (min-width:768px){
        text-align: center;
        font-size: 50px;
        margin-bottom: 100px;
    }
    @media screen and (max-width:767px){
        text-align: center;
        font-size: 45px;
        margin-bottom: 60px;
        line-height: normal;
    }

    & svg{
        position: absolute;
        top: -34px;
        right: 0;

        @media screen and (max-width:1024px) and (min-width:768px){
            right: unset;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    & svg path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dash 5s linear alternate infinite;
        stroke: #E58EE7;
        stroke-opacity: 0.29;
        stroke-width: 2.20089;
      }
      
      @keyframes dash {
        from {
          stroke-dashoffset: 1000;
        }
        to {
          stroke-dashoffset: 0;
        }
      }

      
`


export const FormInput = styled.input `
    width: 100%;
    font-weight: 300;
    font-size: 22.0089px;
    line-height: 40px;
    text-align: left;
    text-transform: capitalize;
    background: transparent;
    border: 0;
    border-bottom: 1.10044px solid rgba(250, 250, 250, 0.14);
    margin-bottom: 14.31px;
    font-family: 'gilroylight';
    color:#ffffff;
    outline: 0;
    line-height: normal;
    padding:12px 0;

    &::placeholder{
        opacity:1;
        color:#ffffff;
    }

    @media screen and (max-width:767px){
        font-size:18px;
    }

`

export const FormTextarea = styled.textarea `
    width: 100%;
    font-weight: 300;
    font-size: 22.0089px;
    line-height: 40px;
    text-align: left;
    text-transform: capitalize;
    background: transparent;
    border: 0;
    border-bottom: 1.10044px solid rgba(250, 250, 250, 0.14);
    margin-bottom: 14.31px;
    font-family: 'gilroylight';
    color:#ffffff;
    outline: 0;
    resize: none;
    line-height: normal;
    padding:12px 0;

    &::placeholder{
        opacity:1;
        color:#ffffff;
    }

    @media screen and (max-width:767px){
        font-size:18px;
    }
`
export const FormSubmitButton = styled.button `
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
    transition: all 500ms ease-in-out;
    overflow:hidden;
    margin-top:31.83px;
    font-family: 'Mabry Pro';
    cursor: pointer;
    border:0;
    text-transform:capitalize;

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