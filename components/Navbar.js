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
 flex-direction: row;
 justify-content: space-between;
 padding: 5px;
 height: 9rem;
 align-items: center;
 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

`




function Navbar() {
  return (
  <Header>
    <Image src={logo} alt="Vann buys houses log" height={150} width={150} />
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