import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import styles from './Navbar.module.css';

const NavList = styled.ul`
  list-style: none;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
    text-decoration: none;
    color: black;
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
    <h3>Vann Buys Houses</h3>
    <NavList>
      <li >
        <Link className={styles.listItem} href="/">
        Home
        </Link>
        </li>
      <li >
        <Link className={styles.listItem} href="/about">
        About
        </Link>
        </li>
        <li >
        <Link className={styles.listItem} href="/partner">
        Partner
        </Link>
        </li>
    </NavList>
  </Header> )
  
}

export default Navbar;