import React from 'react'
import MainHeader from './MainHeader'
import MiddleHeader from './MiddleHeader'
import { HeaderWrap } from './styled'

function Header() {
    return (
        <HeaderWrap className="header">
            <MainHeader />
            <hr />
            <MiddleHeader />
            <hr />
        </HeaderWrap>
    )
}

export default Header
