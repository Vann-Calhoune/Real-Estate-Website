import styled from "styled-components"
import Image from "next/image"
import call from '../public/telephone.png'
import email from '../public/email.png'
import logo from '../public/logo.png'
import facebook from '../public/facebook.png'
import gram from '../public/instagram.png'
import Link from "next/link"

const Feet = styled.footer`
width: 100%;
height: 11rem;
display: flex;

justify-content: space-around;
// border: 1px solid black;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 8px 0px;
@media (min-width: 800px) {
justify-content: space-between;
}

`
const Contact = styled.div`
display: flex;
flex-direction: column;
> div {
  display: flex;
  gap: 10px;
  font-size: 14px;
}
> ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: relative;
  right: 40px;
  margin-bottom: 3px;
}
// border: 1px solid black;
padding-right: 0px;
@media (min-width: 800px) {
  
  > div {
    font-size: 20px;

  }
  > ul {
    font-size: 20px;
    flex-direction: row;
    gap: 5px;
  }
}
`
const imageStyle = {
  // border: '1px solid black'
}

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
 
}

function Footer() {
  return (
    <Feet>
        <Image src={logo} alt='vann buys houses logo' width={160} height={160} style={imageStyle} />
        <Contact>
          <ul>
            <li>Contact us:</li>
            <li>816-945-2250</li>
          </ul>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100089139481574" target="_blank" rel="noreferrer"><Image src={facebook} alt='facebook logo' width={35} height={35}/></a>
            <a href="https://www.instagram.com/vannbuyshouses/" target="_blank" rel="noreferrer"><Image src={gram} alt='instagram logo' width={35} height={35}/></a>
            <a href="tel:8169452250"><Image src={call} alt='phone' width={35} height={35}/></a>
            <a href="mailto: vann.calhoune@vannbuyshouses.com"><Image src={email} alt='envelope' width={35} height={35} /></a>
          </div>
          <div>
            <Link style={linkStyle} href='/privacy'>Privacy Policy</Link>
          </div>
          <div>
            Vann Buy's Houses, LLC
          </div>
        </Contact>
    </Feet>
  )
}

export default Footer