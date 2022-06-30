import React from 'react'
import {HelpSetionWrap,HelpSetionTitle,HelpSectionLink} from '../HelpSection/style'
import { GrFormNextLink } from "react-icons/gr";
function HelpSection() {
  return (
    <HelpSetionWrap data-aos="fade-up">
        <HelpSetionTitle>
        You Need any Services,<span> i help you .</span>
        </HelpSetionTitle>
        <HelpSectionLink to="/">
            contact us <GrFormNextLink />
        </HelpSectionLink>
    </HelpSetionWrap>
  )
}

export default HelpSection;