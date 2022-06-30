import React from 'react'

import {
    FooterTop,
    FooterContainer,
    FooterRow,
    FooterCol,
    FooterColInner,
    FooterColTitle,
    FooterMenu,
    FooterMenuLi,
    FooterMenuLink,
    FooterBottom,
    FooterBottomCol,
    FooterCopyRights,
    FooterSocialMedia,
    FooterSmLi,
    FooterSmLiLink
} from '../Footer/style' 
import { GrFormNextLink,GrPaypal } from "react-icons/gr";
import { AiOutlineGoogle,AiFillYoutube } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";



function Footer() {
  return (
    <footer data-aos="fade-up" data-aos-duration="1500">
        <FooterTop>
            <FooterContainer>
                <FooterRow>
                    <FooterCol>
                        <FooterColInner>
                            <FooterColTitle>
                                Who we are
                            </FooterColTitle>
                            <FooterMenu>
                                <FooterMenuLi>
                                    <FooterMenuLink to='/'>
                                        <GrFormNextLink /> Vision & values
                                    </FooterMenuLink>
                                </FooterMenuLi>
                                <FooterMenuLi>
                                    <FooterMenuLink to='/'>
                                    <GrFormNextLink /> Blog
                                    </FooterMenuLink>
                                </FooterMenuLi>
                            </FooterMenu>
                        </FooterColInner>
                    </FooterCol>
                    <FooterCol>
                        <FooterColInner>
                            <FooterColTitle>
                                terms of Use
                            </FooterColTitle>
                            <FooterMenu>
                                <FooterMenuLi>
                                    <FooterMenuLink to='/'>
                                    <GrFormNextLink /> Terms and Conditions
                                    </FooterMenuLink>
                                </FooterMenuLi>
                                <FooterMenuLi>
                                    <FooterMenuLink to='/'>
                                    <GrFormNextLink /> Privacy Policy
                                    </FooterMenuLink>
                                </FooterMenuLi>
                            </FooterMenu>
                            <FooterColTitle className='margin-top-custom'>
                                Let's talk
                            </FooterColTitle>
                            <FooterMenu>
                                <FooterMenuLi>
                                    <FooterMenuLink to='/'>
                                    <GrFormNextLink /> contact
                                    </FooterMenuLink>
                                </FooterMenuLi>
                            </FooterMenu>
                        </FooterColInner>
                    </FooterCol>
                    <FooterCol>
                        <FooterColInner>
                            <FooterColTitle>
                                Services
                            </FooterColTitle>
                            <FooterMenu>
                                <FooterMenuLi>
                                    <FooterMenuLink to='/'>
                                    <GrFormNextLink /> <span>Smart Contract Development</span> 
                                    </FooterMenuLink>
                                </FooterMenuLi>
                                <FooterMenuLi>
                                    <FooterMenuLink to='/'>
                                    <GrFormNextLink /> <span>Crypto Coin, Token and NFT creation</span> 
                                    </FooterMenuLink>
                                </FooterMenuLi>
                                <FooterMenuLi>
                                    <FooterMenuLink to='/'>
                                    <GrFormNextLink /> <span>NFT Web3 + Minting + Wallet connect</span> 
                                    </FooterMenuLink>
                                </FooterMenuLi>
                                <FooterMenuLi>
                                    <FooterMenuLink to='/'>
                                    <GrFormNextLink /> <span>Blockchain Mobile, Desktop & Web Applications</span> 
                                    </FooterMenuLink>
                                </FooterMenuLi>
                                <FooterMenuLi>
                                    <FooterMenuLink to='/'>
                                    <GrFormNextLink /> <span>Custom Blockchain Development & DeFi</span> 
                                    </FooterMenuLink>
                                </FooterMenuLi>
                            </FooterMenu>
                        </FooterColInner>
                    </FooterCol>
                </FooterRow>
            </FooterContainer>
        </FooterTop>
        <FooterBottom>
            <FooterContainer>
                <FooterRow className='align-self-center'>
                    <FooterBottomCol>
                        <FooterCopyRights>martza @2022 all right recived</FooterCopyRights>
                    </FooterBottomCol>
                    <FooterBottomCol>
                        <FooterSocialMedia>
                            <FooterSmLi>
                                <FooterSmLiLink to='/'>
                                    <AiOutlineGoogle />
                                </FooterSmLiLink>
                            </FooterSmLi>
                            <FooterSmLi>
                                <FooterSmLiLink to='/'>
                                    <GrPaypal />
                                </FooterSmLiLink>
                            </FooterSmLi>
                            <FooterSmLi>
                                <FooterSmLiLink to='/'>
                                    <BsMessenger />
                                </FooterSmLiLink>
                            </FooterSmLi>
                            <FooterSmLi>
                                <FooterSmLiLink to='/'>
                                    <AiFillYoutube />
                                </FooterSmLiLink>
                            </FooterSmLi>
                            <FooterSmLi>
                                <FooterSmLiLink to='/'>
                                    <RiWhatsappFill />
                                </FooterSmLiLink>
                            </FooterSmLi>
                        </FooterSocialMedia>
                    </FooterBottomCol>
                </FooterRow>
            </FooterContainer>
        </FooterBottom>
    </footer>
  )
}

export default Footer;