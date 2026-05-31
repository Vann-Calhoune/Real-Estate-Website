import Link from 'next/link';
import styled from 'styled-components';
import styles from './Navbar.module.css';
import logo from '../public/logo.png';
import Image from 'next/image';
import { useState } from 'react';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10000;
  display: flex;
  min-height: 82px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(12px);
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 640px) {
    position: absolute;
    top: 82px;
    left: 16px;
    right: 16px;
    z-index: 100;
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: white;
    box-shadow: var(--shadow);
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
    transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-12px')});
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    width: 32px;
    height: 3px;
    border-radius: 5px;
    background: var(--brand);
  }

  @media (max-width: 640px) {
    display: flex;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <LogoDiv>
        <Link href="/" aria-label="Vann Buys Houses home">
          <Image src={logo} alt="Vann Buys Houses logo" height={88} width={88} priority />
        </Link>
      </LogoDiv>
      <Hamburger
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
      </Hamburger>
      <NavList onClick={() => setIsOpen(false)} $isOpen={isOpen}>
        <li>
          <Link className={styles.listItem} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.listItem} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.listItem} href="/partner">
            Refer
          </Link>
        </li>
      </NavList>
    </Header>
  );
}

export default Navbar;
