import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import styles from './Navbar.module.css';
import logo from '../public/logo.png'
import Image from 'next/image';
import Head from 'next/head';
import { Rubik_80s_Fade } from '@next/font/google';

const NavList = styled.ul`
  list-style: none;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
    text-decoration: none;
    color: black;
`

const Header = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 5px;
 height: 8rem;
 > h3 {
  font-size: 28px;
 }
 align-items: center;

 
`
const unbound = Rubik_80s_Fade({
  weight: '400'
})



function Navbar() {
  return (
  <Header>
    <Image src={logo} alt="Vann buys houses log" height={180} width={180} />
    <NavList className={unbound.className}>
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