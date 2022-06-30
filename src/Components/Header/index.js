import React from 'react'
import { useState, useEffect } from 'react'

import logoimg from '../../images/logo.svg'

import {
    HeaderContainer,
    HeaderRow,
    HeaderLogoCol,
    LogoLink,
    Logo,
    HeaderMenuCol,
    HeaderMenu,
    HeaderMenuLi,
    HeaderMenuLink

} from '../Header/style'


function Header() {
    const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])
  return (
    <header className={scroll ? "scrolled" : ""}>
        <HeaderContainer>
            <HeaderRow>
                <HeaderLogoCol>
                    <LogoLink to='/'>
                        <Logo src={logoimg} />
                    </LogoLink>
                </HeaderLogoCol>
                <HeaderMenuCol>
                    <HeaderMenu>
                        <HeaderMenuLi>
                            <HeaderMenuLink to='/'>
                                About Us
                            </HeaderMenuLink>
                        </HeaderMenuLi>
                        <HeaderMenuLi>
                            <HeaderMenuLink to='/'>
                                Let’s Talk
                            </HeaderMenuLink>
                        </HeaderMenuLi>
                    </HeaderMenu>
                </HeaderMenuCol>
            </HeaderRow>
        </HeaderContainer>
    </header>
  )
}

export default Header;