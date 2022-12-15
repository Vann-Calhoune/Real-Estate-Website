import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'

const NavList = styled.ul`
list-style: none;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
`

const Header = styled.div`
 display: flex;
 justify-content: space-around;
 border: 1px solid black;
 padding: 10px;
`


function Navbar() {
  return (
  <Header>
    <h1>Vann Buys Houses</h1>
    <NavList>
      <li>
        <Link href="/">
        Home
        </Link>
        </li>
      <li>
        <Link href="/about">
        About us
        </Link>
        </li>
        <li>
        <Link href="/partner">
        Partner Program
        </Link>
        </li>


    </NavList>
  </Header> )
  
}

export default Navbar;