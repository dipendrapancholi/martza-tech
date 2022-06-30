import React from 'react'

import {
    ServicesProvideWrap,
    ServicesContainer,
    ServicesTagline,
    ServicesTitle,
    ServicesProvideListing,
    ServicesListingItem,
    ServicesListingTitle,
    ServicesH3,
    ServicesLisingImg,
    ServicesLisingImgUrl,
    ServicesListingdescription,
    ServicesP,
    SevicesBottomTextWrap,
    SevicesBottomText
}from '../Services-Provide/style'

import icon from '../../images/icon1.svg'
import icon1 from '../../images/icon2.svg'
import icon2 from '../../images/icon3.svg'
import icon3 from '../../images/icon4.svg'
import icon4 from '../../images/icon5.svg'


function ServicesProvided() {
  return (
    <ServicesProvideWrap>
        <ServicesContainer>
            <ServicesTagline>
                Services we provide
            </ServicesTagline>
            <ServicesTitle>
                We help businesses do more valuable work, faster.
            </ServicesTitle>
            <ServicesProvideListing>
                <ServicesListingItem data-aos="zoom-in-right" data-aos-duration="2000">
                    <ServicesListingTitle>
                        <ServicesH3>
                            Smart Contract Development 
                        </ServicesH3>
                    </ServicesListingTitle>
                    <ServicesLisingImg>
                        <ServicesLisingImgUrl src={icon} width="100%" />
                    </ServicesLisingImg>
                    <ServicesListingdescription>
                        <ServicesP>Automation Anywhere empowers people whose ideas, thought and focus make the companies they work sophisticated Digital Workforce Platform making work.</ServicesP>
                    </ServicesListingdescription>
                </ServicesListingItem>
                <ServicesListingItem data-aos="zoom-in-right" data-aos-duration="2000">
                    <ServicesListingTitle>
                        <ServicesH3>
                        Crypto Coin, Token and NFT creation
                        </ServicesH3>
                    </ServicesListingTitle>
                    <ServicesLisingImg>
                        <ServicesLisingImgUrl src={icon1} width="104px" />
                    </ServicesLisingImg>
                    <ServicesListingdescription>
                        <ServicesP>Automation Anywhere empowers people whose ideas, thought and focus make the companies they work sophisticated Digital Workforce Platform making work.   
                        </ServicesP>
                    </ServicesListingdescription>
                </ServicesListingItem>
                <ServicesListingItem data-aos="zoom-in-right" data-aos-duration="2000">
                    <ServicesListingTitle>
                        <ServicesH3>
                            NFT Web3 + Minting + Wallet connect
                        </ServicesH3>
                    </ServicesListingTitle>
                    <ServicesLisingImg>
                        <ServicesLisingImgUrl src={icon2} />
                    </ServicesLisingImg>
                    <ServicesListingdescription>
                        <ServicesP>Automation Anywhere empowers people whose ideas, thought and focus make the companies they work sophisticated Digital Workforce Platform making work.</ServicesP>
                    </ServicesListingdescription>
                </ServicesListingItem>
                <ServicesListingItem data-aos="zoom-in-right" data-aos-duration="2000">
                    <ServicesListingTitle>
                        <ServicesH3>
                            Blockchain Mobile, Desktop & Web Applications
                        </ServicesH3>
                    </ServicesListingTitle>
                    <ServicesLisingImg>
                        <ServicesLisingImgUrl src={icon3} />
                    </ServicesLisingImg>
                    <ServicesListingdescription>
                        <ServicesP>Automation Anywhere empowers people whose ideas, thought and focus make the companies they work sophisticated Digital Workforce Platform making work.</ServicesP>
                    </ServicesListingdescription>
                </ServicesListingItem>
                <ServicesListingItem data-aos="zoom-in-right" data-aos-duration="2000">
                    <ServicesListingTitle>
                        <ServicesH3>
                            Blockchain Mobile, Desktop & Web Applications
                        </ServicesH3>
                    </ServicesListingTitle>
                    <ServicesLisingImg>
                        <ServicesLisingImgUrl src={icon4} />
                    </ServicesLisingImg>
                    <ServicesListingdescription>
                        <ServicesP>Automation Anywhere empowers people whose ideas, thought and focus make the companies they work sophisticated Digital Workforce Platform making work.</ServicesP>
                    </ServicesListingdescription>
                </ServicesListingItem>
            </ServicesProvideListing>
            <SevicesBottomTextWrap>
                <SevicesBottomText>
                Also, we will get web3 integration to your website for smart contracts like minting, burning, and transfer. The Smart Contract will include all standard functions.
                </SevicesBottomText>
            </SevicesBottomTextWrap>
        </ServicesContainer>
    </ServicesProvideWrap> 
  )
}

export default ServicesProvided;




