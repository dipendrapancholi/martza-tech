import React from 'react'
import { GrFormNextLink } from "react-icons/gr";
import{
    HeroWrap,
    HeroContainer,
    HeroSubTitle,
    HeroTitle,
    HeroDesc,
    HeroLink ,
    HeroImage,
    HeroMarquee,
    HeroMarqueeText
} from '../HeroSection/style'

import Herosmallimg from '../../images/uyiuyi1.png'

function HeroBanner() {
  return (
    <HeroWrap data-aos="fade-up" data-aos-duration="1000">
        <HeroContainer>
            <HeroSubTitle>
                Are you looking for Solidity Smart Contract? You are in the right place!
            </HeroSubTitle>
            <HeroTitle>
                You will get a high-quality <span>ERC-721 (Standard for NFT</span> Protocol).
            </HeroTitle>
            <HeroDesc>
                Automation Anywhere empowers people whose ideas, thought and focus make the <span>companies they work sophisticated Digital Workforce Platform making work.</span>
            </HeroDesc>
            <HeroLink to='/'>
                Get Started Now <GrFormNextLink />
            </HeroLink>
            <HeroImage src={Herosmallimg}/>
        </HeroContainer>
        <HeroMarquee className='blackbg'>
            <HeroMarqueeText>
                Smart Contract Development, Token creation, NFT Website Smart Contract Development, Token creation, NFT Website Smart Contract Development, Token creation, NFT Website Smart Contract Development, Token creation, NFT Website Smart Contract Development, Token creation, NFT Website Smart Contract Development, Token creation, NFT Website
            </HeroMarqueeText>
        </HeroMarquee>
        <HeroMarquee>
            <HeroMarqueeText>
                Smart Contract Development, Token creation, NFT Website Smart Contract Development, Token creation, NFT Website Smart Contract Development, Token creation, NFT Website Smart Contract Development, Token creation, NFT Website Smart Contract Development, Token creation, NFT Website Smart Contract Development, Token creation, NFT Website
            </HeroMarqueeText>
        </HeroMarquee>
    </HeroWrap>
  )
}

export default HeroBanner;