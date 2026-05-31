import styled from "styled-components"
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa6"

const HeadBar = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px 16px;
width: 100%;
color: white;
background: var(--brand-dark);
font-size: 14px;
justify-content: center;
align-items: center;
padding: 9px 16px;

a {
  display: inline-flex;
  align-items: center;
  color: inherit;
}

@media (min-width: 800px) {
  font-size: 16px;
}

`
function Contact() {
  return (
    <HeadBar>
        <div>Contact us today: <a href="tel:9137774972">913-777-4972</a></div>
        <a href="tel:9137774972" aria-label="Call Vann Buys Houses"><FaPhone size={20} /></a>
        <a href="mailto:vann.calhoune@vannbuyshouses.com" aria-label="Email Vann Buys Houses"><FaEnvelope size={20} /></a>
        <a href="https://www.instagram.com/vannbuyshouses/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={20} /></a>
        <a href="https://www.facebook.com/profile.php?id=100089139481574" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF size={20} /></a>
    </HeadBar>
  )
}

export default Contact
