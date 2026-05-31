import styled from "styled-components";
import Image from "next/image";
import logo from '../public/logo.png';
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa6";

const Feet = styled.footer`
  width: 100%;
  margin-top: 64px;
  background: var(--brand-dark);
  color: white;
`;

const FooterInner = styled.div`
  display: grid;
  gap: 28px;
  width: min(100% - 32px, var(--max-width));
  margin: 0 auto;
  padding: 34px 0;

  @media (min-width: 760px) {
    grid-template-columns: 1fr auto;
    align-items: center;
  }
`;

const Brand = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  img {
    border-radius: var(--radius);
    background: white;
  }

  h2 {
    margin: 0 0 6px;
    font-size: 22px;
  }

  p {
    max-width: 460px;
    margin: 0;
    color: rgba(255, 255, 255, 0.76);
    line-height: 1.6;
  }
`;

const Contact = styled.div`
  display: grid;
  gap: 14px;
  justify-items: start;

  @media (min-width: 760px) {
    justify-items: end;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    color: white;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  a:hover,
  a:focus-visible {
    background: rgba(255, 255, 255, 0.22);
    transform: translateY(-1px);
  }
`;

const FooterLink = styled(Link)`
  color: white;
  font-weight: 700;
  text-decoration: none;
`;

function Footer() {
  return (
    <Feet>
      <FooterInner>
        <Brand>
          <Image src={logo} alt='Vann Buys Houses logo' width={86} height={86} />
          <div>
            <h2>Vann Buys Houses, LLC</h2>
            <p>We buy houses for cash in Kansas City and surrounding areas, with no repairs, no agent fees, and flexible closing timelines.</p>
          </div>
        </Brand>
        <Contact>
          <a href="tel:9137774972">913-777-4972</a>
          <SocialLinks>
            <a href="tel:9137774972" aria-label="Call Vann Buys Houses"><FaPhone size={20} /></a>
            <a href="mailto:vann.calhoune@vannbuyshouses.com" aria-label="Email Vann Buys Houses"><FaEnvelope size={20} /></a>
            <a href="https://www.instagram.com/vannbuyshouses/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={20} /></a>
            <a href="https://www.facebook.com/profile.php?id=100089139481574" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF size={20} /></a>
          </SocialLinks>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
        </Contact>
      </FooterInner>
    </Feet>
  );
}

export default Footer;
