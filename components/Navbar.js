import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import styles from './Navbar.module.css';
import logo from '../public/logo.png'
import Image from 'next/image';

const NavList = styled.ul`
  list-style: none;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
    text-decoration: none;
    margin-right: 30px;
`

const Header = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 5px;
 height: 8rem;
 align-items: center;
`




function Navbar() {
  return (
  <Header>
    <Image src={logo} alt="Vann buys houses log" height={180} width={180} />
    <NavList >
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
        Refer
        </Link>
        </li>
    </NavList>
  </Header> )
  
}

export default Navbar;