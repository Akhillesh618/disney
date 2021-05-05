import React from 'react'
import styled from 'styled-components'
export default function Header() {
    return (
        <Nav>
        <Logo src='/images/logo.svg'/>
        <Navmenu>
                
        </Navmenu>
        </Nav>
    )
}

const Nav =styled.nav`
    height:70px;
    background:#090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;

`
const Logo =styled.img`
    width:80px;
         
`
const Navmenu =styled.div`

`