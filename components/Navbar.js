import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import styles from './Navbar.module.css';
import logo from '../public/logo.png'
import Image from 'next/image';
import { useState } from 'react';
import call from '../public/telephone.png'
import email from '../public/email.png'
import facebook from '../public/facebook.png'
import gram from '../public/instagram.png'

const NavList = styled.ul`
  list-style: none;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
    text-decoration: none;
    margin-right: 30px;
    @media (max-width: 500px) {
      position: absolute;
      top: 173px;
      right: 0.5px;
      gap: 20px;
      flex-direction: column;
      background-color: white;
      width: 100vw;
      text-align: center;
      z-index: 100;
      margin-right: 0;
      padding-bottom: 15px;
      top: ${({ isOpen }) => (isOpen ? "173px" : "-200px")};
      transition: 0.3s;
      box-shadow: 0 5px 3px -3px #00000030;

    };
`;


const Header = styled.div`
 display: flex;
 z-index: 10000;
 flex-direction: row;
 justify-content: space-between;
 padding: 5px;
 height: 9rem;
 align-items: center;
 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
//  border: 1px solid black;



`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 7px;
  margin-right: 20px;
  span {
    height: 4px;
    width: 40px;
    background: #004aad;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 500px) {
    display: flex;
  }
`;

const LogoDiv = styled.div`
  z-index: -1;
`



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <Header>
    <LogoDiv>
      <Image src={logo} alt="Vann buys houses log" height={190} width={190}  />
    </LogoDiv>
    <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
    <NavList onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
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